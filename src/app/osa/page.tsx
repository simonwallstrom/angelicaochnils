import Link from 'next/link'
import { Form } from './form'

export default function Page() {
  return (
    <div className="mt-8 sm:mt-12">
      <h1 className="text-3xl font-medium">O.S.A</h1>
      <p className="mt-4 font-semibold text-red-600 italic">O.S.A senast 14 april 2025</p>
      <p className="mt-4 leading-relaxed">
        Då vi har begränsat med plats så ber vi er ödmjukast att fråga oss om en eventuell +1 om du
        är inbjuden som "singel". Det är viktigt att göra en anmälan för varje person, även om ni
        delar hushåll.
      </p>
      <ul className="mt-4 list-disc space-y-1 pl-4">
        <li>Ange eventuella allergier och specialkost i meddelandefältet nedan.</li>
        <li>Passa på att önska din favoritlåt som du skulle vilja dansa till.</li>
      </ul>
      <div className="mt-6 border-y border-dashed border-black/20 py-6">
        <div className="font-semibold">Betalning för övernattning senast 1 juli 2025</div>
        <ul className="mt-3 list-disc space-y-1 pl-4">
          <li>Swish: 0764124773</li>
          <li>Banköverföring: Nordea 3015 - 0125585</li>
          <li>Totalpris för övernattning 2 nätter 1500 kr/person</li>
          <li>Boende kostar 1500 kr oavsett hur många nätter man har möjlighet att sova över.</li>
        </ul>
      </div>
      <p className="mt-6 italic">
        Har man inte möjlighet att sova över men vill delta under vigseln eller vid andra frågor som
        rör övernattning,{' '}
        <Link className="text-blue-600 underline hover:no-underline" href="/kontakt">
          kontakta Angelica eller Nils →
        </Link>
      </p>
      <Form />
    </div>
  )
}
