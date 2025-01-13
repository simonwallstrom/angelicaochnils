import Image from 'next/image'

export default function Page() {
  return (
    <div className="">
      <div className="bg-white p-2 shadow">
        <Image
          priority
          src="/angelicaochnils.jpg"
          width={2318}
          height={2019}
          alt="Angelica och Nils"
        />
      </div>
      <div className="mt-8 sm:mt-12">
        <h1 className="text-3xl font-medium">Välkommen</h1>
        <p className="mt-4 leading-relaxed sm:mt-6">
          Äntligen bröllop i dagarna tre på Ulvhälls herrgård i Strängnäs och vi hoppas på att få
          dela dessa dagar med just dig. Du som har fått vår inbjudan med länken till denna sida är
          en av de personer som på ett eller annat sätt spelar en viktig roll i våra liv.
        </p>
        <p className="mt-4 leading-relaxed">
          Vi har samlat den viktigaste informationen här på hemsidan. Här finns bland annat
          information om förmingel, vigsel, fest, boende och praktiska detaljer och lite annat som
          ni kan tänkas vilja veta. Vi kommer att kommunicera viktig information till er på
          mailadressen som ni anger när ni lämnar er O.S.A.
        </p>
      </div>
    </div>
  )
}
