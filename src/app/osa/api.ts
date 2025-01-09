import { ContactResponse, CreateContactRequest } from './types'

const API_TOKEN = process.env.GETANEWSLETTER_API_TOKEN
const API_BASE_URL = 'https://api.getanewsletter.com/v3'

export class ContactAlreadyExistsError extends Error {
  constructor() {
    super('Contact already exists')
    this.name = 'ContactAlreadyExistsError'
  }
}

type ApiResult<T> = { success: true; data: T } | { success: false; error: Error }

export async function createNewsletterContact(
  data: CreateContactRequest,
): Promise<ApiResult<ContactResponse>> {
  const response = await fetch(`${API_BASE_URL}/contacts/`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const responseData = await response.json()

  if (!response.ok) {
    if (responseData.email?.length === 1) {
      return {
        success: false,
        error: new ContactAlreadyExistsError(),
      }
    }
    return {
      success: false,
      error: new Error('Failed to create contact'),
    }
  }

  return {
    success: true,
    data: responseData,
  }
}
