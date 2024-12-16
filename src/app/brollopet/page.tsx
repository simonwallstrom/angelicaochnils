import Image from 'next/image'

export default function Page() {
  return (
    <div className="">
      <div className="-mx-2 rotate-1 bg-white p-2 shadow">
        <Image priority src="/ulvhall.jpg" width={2048} height={1365} alt="Angelica och Nils" />
      </div>
      <div className="">
        <h1 className="mt-6 text-3xl font-medium sm:mt-12">Bröllopet</h1>
        <p className="mt-4 leading-relaxed sm:mt-6">
          14-16 juli 2025 blir det äntligen bröllop och fest på Ulvhälls Herrgård. Vi hoppas att ni
          vill komma och fira med oss!
        </p>
        <h2 className="mt-6 text-2xl font-medium sm:mt-12">Incheckning</h2>
        <p className="mt-3 leading-relaxed">
          Välkommen från Måndag 14 juli kl 17:00. Rum är förbokade på herrgården samt i ett
          närliggande Annex till alla gäster.
        </p>
      </div>
    </div>
  )
}
