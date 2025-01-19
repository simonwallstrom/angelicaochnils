'use server'

import { redirect } from 'next/navigation'
import { parseWithZod } from '@conform-to/zod'
import { rsvpSchema } from './schema'
import { createNewsletterContact, ContactAlreadyExistsError } from './api'
import { setSubmissionData } from './cookies'
import type { CreateContactRequest } from './types'
import { Redis } from '@upstash/redis'

const LISTS = {
  ATTENDING: 'mE6faz',
  NOT_ATTENDING: 'NWT8nHDA8P',
} as const

const ERROR_MESSAGES = {
  INVALID_CODE: 'Ogiltig inbjudningskod',
  SAVE_ERROR:
    'Det gick tyvärr inte att spara ditt svar. Vänligen försök igen om en stund. Om problemet kvarstår, kontakta Angelica och Nils.',
  CONTACT_EXISTS:
    'Det finns redan ett svar som är kopplat till denna e-postadress, kontakta Angelica och Nils om du vill uppdatera ditt svar.',
} as const

const redis = Redis.fromEnv()

function createRequestData(formData: ReturnType<typeof rsvpSchema.parse>): CreateContactRequest {
  const isAttending = formData.isAttending === 'true'

  return {
    first_name: formData.firstName,
    last_name: formData.lastName,
    email: formData.emailAddress,
    lists: [
      {
        hash: isAttending ? LISTS.ATTENDING : LISTS.NOT_ATTENDING,
      },
    ],
    attributes: {
      telefonnummer: formData.phoneNumber,
      'kommer-du': isAttending ? 'Ja' : 'Nej',
      'antal-natter': formData.numberOfNights,
      kostalternativ: formData.dietaryRequirements,
      barn: formData.hasKids,
      favoritlat: formData.favoriteSong,
    },
  }
}

export async function createContact(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, { schema: rsvpSchema })
  if (submission.status !== 'success') {
    return submission.reply()
  }

  if (submission.value.code !== process.env.INVITATION_CODE) {
    return submission.reply({
      fieldErrors: { code: [ERROR_MESSAGES.INVALID_CODE] },
    })
  }

  const requestData = createRequestData(submission.value)

  try {
    // Save to Redis
    await redis.set(
      `rsvp:${submission.value.emailAddress}:${Date.now()}`,
      JSON.stringify({
        submission: submission.value,
        requestData,
        timestamp: new Date().toISOString(),
      }),
    )

    // Create newsletter contact
    const result = await createNewsletterContact(requestData)
    if (!result.success) {
      throw result.error
    }

    // Set submission data
    await setSubmissionData(result.data)
  } catch (error) {
    if (error instanceof ContactAlreadyExistsError) {
      return submission.reply({
        formErrors: [ERROR_MESSAGES.CONTACT_EXISTS],
      })
    }

    return submission.reply({
      formErrors: [ERROR_MESSAGES.SAVE_ERROR],
    })
  }

  redirect('/osa/tack')
}
