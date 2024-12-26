'use server'

import { redirect } from 'next/navigation'
import { parseWithZod } from '@conform-to/zod'
import { rsvpSchema } from './schema'

const API_TOKEN = process.env.GETANEWSLETTER_API_TOKEN
const API_BASE_URL = 'https://api.getanewsletter.com/v3'

export async function createContact(prevState: unknown, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const submission = parseWithZod(formData, {
    schema: rsvpSchema,
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  const response = await fetch(`${API_BASE_URL}/contacts/`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: submission.value.firstName,
      last_name: submission.value.lastName,
      email: submission.value.emailAddress,
      lists: [
        {
          hash: submission.value.isAttending === 'true' ? 'e7TIsIyJoMJBUXkGzl' : '6hXETqDhd',
        },
      ],
      attributes: {
        telefonnummer: submission.value.phoneNumber,
        'kommer-du': submission.value.isAttending === 'true' ? 'Ja' : 'Nej',
        ...(submission.value.isAttending === 'true'
          ? {
              'antal-natter': submission.value.numberOfNights === 'one' ? 1 : 2,
              kostalternativ: submission.value.dietaryRequirements,
              barn: submission.value.hasKids === 'true' ? 'Ja' : 'Nej',
              favoritlat: submission.value.favoriteSong,
            }
          : {}),
      },
    }),
  })

  if (!response.ok) {
    const res = await response.json()
    console.log(res.email.length)
    if (res.email.length === 1) {
      console.log('inside if')
      return submission.reply({
        formErrors: [
          'Det finns redan ett svar som är kopplat till denna e-postadress, kontakta Angelica och Nils för att uppdatera ditt svar.',
        ],
      })
    } else {
      return submission.reply({
        formErrors: ['Ett okänt fel uppstod'],
      })
    }
  }

  redirect('/osa/tack')
}

export async function createContactExample(formData: FormData) {
  const email = formData.get('email')

  const response = await fetch(`${API_BASE_URL}/contacts/`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      lists: [], // Optional: Add list IDs the contact should be subscribed to
      attributes: {}, // Optional: Add custom attributes
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to create contact')
  }

  return response.json()
}
