import { cookies } from 'next/headers'
import { ContactResponse } from './types'

export async function setSubmissionData(data: ContactResponse) {
  const cookieStore = await cookies()
  cookieStore.set('submission-data', JSON.stringify(data), {
    maxAge: 3600,
  })
}

export async function getSubmissionData(): Promise<ContactResponse | null> {
  const cookieStore = await cookies()
  const data = cookieStore.get('submission-data')
  return data ? JSON.parse(data.value) : null
}
