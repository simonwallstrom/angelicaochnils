import Link from 'next/link'
import { getSubmissionData } from '../cookies'

export default async function Page() {
  const submissionData = await getSubmissionData()

  return (
    <div className="mt-8 sm:mt-12">
      <h1 className="text-3xl font-medium">Tack för ditt svar!</h1>
      <p className="mt-4 leading-relaxed sm:mt-6">
        För alla deltagare kommer vi att skicka ut mer detaljerad information när bröllopet närmar
        sig. Observera att varje person behöver göra en separat anmälan, även om ni bor i samma
        hushåll.{' '}
      </p>
      <p className="mt-4">
        <Link className="whitespace-nowrap text-blue-600 underline hover:no-underline" href="/osa">
          Gör en ny anmälan →
        </Link>
      </p>
      {submissionData && (
        <div className="mt-10 bg-white p-6 shadow-sm md:p-12">
          <h2 className="text-2xl font-medium">Ditt svar</h2>
          <p className="mt-1 leading-relaxed">
            Om du behöver ändra ditt svar eller om något blivit fel,{' '}
            <Link
              className="whitespace-nowrap text-blue-600 underline hover:no-underline"
              href="/kontakt"
            >
              kontakta Angelica eller Nils →
            </Link>
          </p>

          <div className="mt-6 divide-y divide-dashed divide-gray-300 border-y border-dashed border-gray-300">
            <div className="flex flex-col py-2 md:flex-row">
              <div className="w-1/3 text-gray-600">Förnamn</div>
              <div className="flex-1 font-medium">{submissionData.first_name}</div>
            </div>
            <div className="flex flex-col py-2 md:flex-row">
              <div className="w-1/3 text-gray-600">Efternamn</div>
              <div className="flex-1 font-medium">{submissionData.last_name}</div>
            </div>
            <div className="flex flex-col py-2 md:flex-row">
              <div className="w-1/3 text-gray-600">E-post</div>
              <div className="flex-1 font-medium">{submissionData.email}</div>
            </div>
            <div className="flex flex-col py-2 md:flex-row">
              <div className="w-1/3 text-gray-600">Telefonnummer</div>
              <div className="flex-1 font-medium">{submissionData.attributes.telefonnummer}</div>
            </div>
            <div className="flex flex-col py-2 md:flex-row">
              <div className="w-1/3 text-gray-600">Kommer du?</div>
              <div className="flex-1 font-medium">{submissionData.attributes['kommer-du']}</div>
            </div>
            {submissionData.attributes['kommer-du'] === 'Ja' ? (
              <>
                <div className="flex flex-col py-2 md:flex-row">
                  <div className="w-1/3 text-gray-600">Antal nätter</div>
                  <div className="flex-1 font-medium">
                    {submissionData.attributes['antal-natter'] || 'Inte angivet'}
                  </div>
                </div>
                <div className="flex flex-col py-2 md:flex-row">
                  <div className="w-1/3 text-gray-600">Kostalternativ</div>
                  <div className="flex-1 font-medium">
                    {submissionData.attributes.kostalternativ || 'Inte angivet'}
                  </div>
                </div>
                <div className="flex flex-col py-2 md:flex-row">
                  <div className="w-1/3 text-gray-600">Barn med?</div>
                  <div className="flex-1 font-medium">{submissionData.attributes.barn}</div>
                </div>
                <div className="flex flex-col py-2 md:flex-row">
                  <div className="w-1/3 text-gray-600">Favoritlåt</div>
                  <div className="flex-1 font-medium">
                    {submissionData.attributes.favoritlat || 'Inte angivet'}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}
