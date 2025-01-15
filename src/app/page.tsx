import Image from 'next/image'

export default function Page() {
  return (
    <div className="">
      <div className="bg-white p-2 shadow">
        <Image
          priority
          src="/angelica-och-nils.jpg"
          width={2320}
          height={2541}
          alt="Angelica och Nils"
        />
      </div>
      <div className="mt-8 sm:mt-12">
        <h1 className="text-3xl font-medium">Välkommen</h1>
        <p className="mt-4 leading-relaxed sm:mt-6">
          Äntligen bröllop i dagarna tre på Ulvhälls herrgård i Strängnäs. Vi hoppas på att få dela
          dessa dagar med just dig. Du som har fått vår inbjudan med länk till denna sida är en av
          de personer som på ett eller annat sätt har en viktig roll i våra liv.
        </p>
        <p className="mt-4 leading-relaxed">
          Vi har samlat den viktigaste informationen här på hemsidan. Du hittar bland annat
          information om förmingel, vigsel, fest, boende och praktiska detaljer och lite annat som
          du kan tänkas vilja veta. Vi kommer att kommunicera viktig information till dig på
          mailadressen som angetts när du lämnat O.S.A.
        </p>
      </div>
    </div>
  )
}
