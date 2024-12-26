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
      email: submission.value.emailAddress,
      lists: [],
      attributes: {},
    }),
  })

  if (!response.ok) {
    return submission.reply({
      formErrors: ['Ett okänt fel uppstod'],
    })
  }

  return null

  // redirect('/')
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
