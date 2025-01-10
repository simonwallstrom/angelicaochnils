import Link from 'next/link'

export default function Page() {
  return (
    <div className="overflow-hidden border-t border-black/10">
      <div className="">
        <h1 className="mt-6 text-3xl font-medium sm:mt-12">Info</h1>
        <p className="mt-4 leading-relaxed sm:mt-6">
          Har ni något ni undrar över är ni välkomna att höra av er till oss eller vårt toastpar.{' '}
          <Link
            className="whitespace-nowrap text-blue-600 underline hover:no-underline"
            href="/kontakt"
          >
            Kontakta oss →
          </Link>
        </p>

        <h2 className="mt-4 text-xl font-medium sm:mt-8">Boende</h2>
        <p className="mt-3 leading-relaxed">
          Herrgården ligger vid Mälaren. Här finns bastu & relax med egen badbrygga. Ta med egen
          badhandduk om du vill bada. Det finns även ett biljardrum samt tennisbanor.
        </p>
        <p className="mt-3 leading-relaxed">
          På Ulvhäll herrgård finns det 13 rum och resterande rum finns på det intilliggande annexet
          Philipsonska gården ca 150m från herrgården. Samtliga rum har egen toalett och dusch, det
          ingår lakan och handdukar. Bra att veta är att delar av entreplanet på herrgården har
          stengolv.
        </p>
        <p className="mt-3 leading-relaxed">
          Rummen är redan förbokade. För två nätter del i dubbelrum alt enkelrum 1500 kr/person.
        </p>

        <h2 className="mt-4 text-xl font-medium sm:mt-8">Present</h2>
        <p className="mt-3 leading-relaxed">
          Att ni deltar alla dagar står högst upp på vår önskelista.
        </p>

        <h2 className="mt-4 text-xl font-medium sm:mt-8">Tal och spex</h2>
        <p className="mt-3 leading-relaxed">
          Vill ni hålla tal, spexa eller annat skoj?, Då ska det anmälas till vårt toastpar i god
          tid så de kan planera kvällens program.{' '}
          <Link className="text-blue-600 underline hover:no-underline" href="/kontakt#toastpar">
            kontakta Gustav eller Rebecca →
          </Link>
        </p>

        <h2 className="mt-4 text-xl font-medium sm:mt-8">Klädkod</h2>
        <p className="mt-3 leading-relaxed">Sommarkavaj</p>

        <h2 className="mt-4 text-xl font-medium sm:mt-8">Transport</h2>
        <p className="mt-3 leading-relaxed">
          Enklast tar ni er hit med bil, det finns gott om lättillgängliga parkeringsplatser vid
          både herrgården och annexet. Åker man tåg åker man till Strängnäs resecentrum och
          promenerar sedan 1,5 km till herrgården. Framför Herrgården ligger en stor brygga som kan
          ta emot båtar som har ett djup på upp till 4 meter.
        </p>

        <h2 className="mt-4 text-xl font-medium sm:mt-8">Barn</h2>
        <p className="mt-3 leading-relaxed">
          Vi älskar era barn men denna helg passar det bättre att de är hemma. Mindre barn som inte
          kan lämnas till barnvakt är förstås välkomna, meddela detta när ni osar. Ett fåtal
          spjälsängar finns att tillgå på herrgården.
        </p>

        <h2 className="mt-4 text-xl font-medium sm:mt-8">Konfetti och fyrverkerier</h2>
        <p className="mt-3 leading-relaxed">
          Vem älskar inte konfetti? Men inte idag. Städavgift för konfettibomber eller liknande inne
          och utanför herrgården är 7500 kr. Fyrverkerier tackar vi ödmjukast nej till.
        </p>
      </div>
    </div>
  )
}
