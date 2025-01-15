import Link from 'next/link'
import { Form } from './form'

export default function Page() {
  return (
    <div className="mt-8 sm:mt-12">
      <h1 className="text-3xl font-medium">O.S.A</h1>
      <p className="mt-4 font-semibold text-red-600 italic">O.S.A senast 14 april 2025</p>
      <p className="mt-4 leading-relaxed">
        Det är viktigt att göra en anmälan för varje person, även om ni är ett par. Ange eventuella
        allergier och specialkost i meddelandefältet nedan. Önska din favoritlåt som du vill dansa
        till.
      </p>
      <div className="mt-6 border border-dashed border-black/20 bg-black/5 p-6">
        <h2 className="text-lg font-semibold">
          Betalning för övernattning <span className="underline">senast 1 juli 2025</span>
        </h2>
        <ul className="mt-4 list-disc space-y-1 pl-4">
          <li>Banköverföring: Nordea 3480 4939253</li>
          <li>Swish: 0764124773</li>
        </ul>
        <div className="mt-4">
          <span className="font-medium">Totalpris för övernattning 2 nätter 1500 kr/person.</span>
          <br />
          Boende kostar 1500 kr oavsett hur många nätter du har möjlighet att sova över.
        </div>
      </div>
      <p className="mt-6 italic">
        Har du inte möjlighet att sova över men vill delta under vigseln eller vid andra frågor som
        rör övernattning{' '}
        <Link
          className="whitespace-nowrap text-blue-600 underline hover:no-underline"
          href="/kontakt"
        >
          kontakta Angelica eller Nils →
        </Link>
      </p>
      <Form />
    </div>
  )
}
