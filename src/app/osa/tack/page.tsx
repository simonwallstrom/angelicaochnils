import Link from 'next/link'
import { getSubmissionData } from '../cookies'

export default async function Page() {
  const submissionData = await getSubmissionData()

  return (
    <div className="border-t border-black/10">
      <div className="">
        <h1 className="mt-6 text-3xl font-medium sm:mt-12">Tack för ditt svar!</h1>
        <p className="mt-4 leading-relaxed sm:mt-6">
          För alla deltagare kommer vi att skicka ut mer detaljerad information när bröllopet närmar
          sig. Observera att varje person behöver göra en separat anmälan, även om ni bor i samma
          hushåll.{' '}
        </p>
        <p className="mt-4">
          <Link
            className="whitespace-nowrap text-blue-600 underline hover:no-underline"
            href="/osa"
          >
            Gör en ny anmälan →
          </Link>
        </p>
        <div className="mt-10">
          {submissionData && (
            <>
              Thank you, {submissionData.first_name} {submissionData.last_name}!
              {submissionData.attributes['kommer-du'] === 'Ja' && (
                <p>We're looking forward to seeing you!</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
