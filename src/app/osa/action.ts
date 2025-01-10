'use server'

import { redirect } from 'next/navigation'
import { parseWithZod } from '@conform-to/zod'
import { rsvpSchema } from './schema'
import { createNewsletterContact, ContactAlreadyExistsError } from './api'
import { setSubmissionData } from './cookies'
import type { CreateContactRequest } from './types'

export async function createContact(prevState: unknown, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const submission = parseWithZod(formData, {
    schema: rsvpSchema,
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  if (submission.value.code !== process.env.INVITATION_CODE) {
    return submission.reply({
      fieldErrors: {
        code: ['Ogiltig inbjudningskod'],
      },
    })
  }

  const requestData: CreateContactRequest = {
    first_name: submission.value.firstName,
    last_name: submission.value.lastName,
    email: submission.value.emailAddress,
    lists: [
      {
        hash: submission.value.isAttending === 'true' ? 'mE6faz' : 'NWT8nHDA8P',
      },
    ],
    attributes: {
      telefonnummer: submission.value.phoneNumber,
      'kommer-du': submission.value.isAttending === 'true' ? 'Ja' : 'Nej',
      'antal-natter': submission.value.numberOfNights,
      kostalternativ: submission.value.dietaryRequirements,
      barn: submission.value.hasKids,
      favoritlat: submission.value.favoriteSong,
    },
  }

  const result = await createNewsletterContact(requestData)

  if (result.success === false) {
    if (result.error instanceof ContactAlreadyExistsError) {
      return submission.reply({
        formErrors: [
          'Det finns redan ett svar som är kopplat till denna e-postadress, kontakta Angelica och Nils om du vill uppdatera ditt svar.',
        ],
      })
    }

    return submission.reply({
      formErrors: ['Ett okänt fel uppstod'],
    })
  }

  await setSubmissionData(result.data)
  redirect('/osa/tack')
}
