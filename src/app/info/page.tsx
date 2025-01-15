import Link from 'next/link'

export default function Page() {
  return (
    <div className="">
      <h1 className="text-3xl font-medium">Info</h1>
      <p className="mt-4 leading-relaxed sm:mt-6">
        Är det något du undrar över, hör av dig till oss eller vårt toastpar.{' '}
        <Link
          className="whitespace-nowrap text-blue-600 underline hover:no-underline"
          href="/kontakt"
        >
          Kontakta oss →
        </Link>
      </p>

      <h2 className="mt-4 text-xl font-medium sm:mt-8">Boende</h2>
      <p className="mt-3 leading-relaxed">
        Herrgården ligger vid Mälaren. Här finns en bastu med egen badbrygga. Ta med egen badhandduk
        om du vill bada. Det finns även ett biljardrum samt tennisbanor.
      </p>
      <p className="mt-3 leading-relaxed">
        På Ulvhälls herrgård finns 13 rum och resterande rum finns på ett intilliggande annex ca
        150m från herrgården. Samtliga rum har egen toalett och dusch. Lakan och handdukar ingår.
      </p>
      <p className="mt-3 leading-relaxed">
        Rummen är redan förbokade. Två nätter del i dubbelrum alt enkelrum 1500 kr/person.
      </p>

      <h2 className="mt-4 text-xl font-medium sm:mt-8">Transport</h2>
      <p className="mt-3 leading-relaxed">
        Enklast tar du dig hit med bil. Det finns gott om parkeringsplatser vid både herrgården och
        annexet. Åker du tåg till Strängnäs resecentrum är det sedan 1,5 km promenad till
        herrgården.
      </p>
      <p className="mt-4 leading-relaxed">
        <span className="font-medium">Ulvhälls Herrgård</span>
        <br />
        <span>Ulvhälls allé 645 40 Strängnäs</span>
        <br />
        <a
          className="whitespace-nowrap text-blue-600 underline hover:no-underline"
          href="https://maps.app.goo.gl/nhsYMYFoe3RfcuMf7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visa på Google Maps →
        </a>
      </p>

      <h2 className="mt-4 text-xl font-medium sm:mt-8">Klädkod</h2>
      <p className="mt-3 leading-relaxed">Sommarkavaj</p>

      <h2 className="mt-4 text-xl font-medium sm:mt-8">Barn</h2>
      <p className="mt-3 leading-relaxed">
        Vi älskar era barn men denna helg passar det bättre att de är hemma. Mindre barn som inte
        kan lämnas till barnvakt är förstås välkomna, meddela detta när du O.S.A. Ett fåtal
        spjälsängar finns att tillgå på herrgården.
      </p>

      <h2 className="mt-4 text-xl font-medium sm:mt-8">Present</h2>
      <p className="mt-3 leading-relaxed">
        Att du deltar alla dagar står högst upp på vår önskelista.
      </p>

      <h2 className="mt-4 text-xl font-medium sm:mt-8">Tal och spex</h2>
      <p className="mt-3 leading-relaxed">
        Vill du hålla tal, spexa eller annat skoj? Då ska det anmälas i god tid till vårt toastpar
        så de kan planera kvällens program.{' '}
        <Link className="text-blue-600 underline hover:no-underline" href="/kontakt#toastpar">
          Kontakta Gustav eller Rebecca →
        </Link>
      </p>

      <h2 className="mt-4 text-xl font-medium sm:mt-8">Konfetti och fyrverkerier</h2>
      <p className="mt-3 leading-relaxed">
        Vem älskar inte konfetti? Men inte idag. Städavgift för konfettibomber eller liknande inne
        och utanför herrgården är 7500 kr. Fyrverkerier tackar vi ödmjukas nej till.
      </p>
    </div>
  )
}
