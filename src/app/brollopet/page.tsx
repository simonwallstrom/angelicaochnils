import Image from 'next/image'

export default function Page() {
  return (
    <div className="">
      <div className="bg-white p-2 shadow">
        <Image priority src="/ulvhall.jpg" width={2318} height={2019} alt="Angelica och Nils" />
      </div>
      <div className="mt-8 sm:mt-12">
        <h1 className="text-3xl font-medium">Bröllopet</h1>
        <p className="mt-4 leading-relaxed">
          14-16 juli 2025 blir det äntligen bröllop och fest på Ulvhälls Herrgård. Vi hoppas att ni
          vill komma och fira med oss!
        </p>
        <h2 className="mt-4 text-xl font-medium sm:mt-8">Måndag 14 juli</h2>
        <p className="mt-3 leading-relaxed">
          Välkommen från kl 17:00. Rum är förbokade på herrgården samt i ett närliggande Annex till
          alla gäster. Vi tänder grillarna kl 19:00, tag med egen dryck.
        </p>
        <h2 className="mt-4 text-xl font-medium sm:mt-8">Tisdag 15 juli</h2>
        <p className="mt-3 leading-relaxed">
          Vi förser er med frukost och en enklare lunch innan vigseln. Vigsel kommer ske utomhus, vi
          hoppas självklart på vackert väder men om det mot förmodan skulle regna så medtag ett
          paraply eller en poncho. Vid kraftigare regn/oväder finns en plan B. Efter vigseln blir
          det brudskål, middag och fest hela natten lång.
        </p>
        <h2 className="mt-4 text-xl font-medium sm:mt-8">Onsdag 16 juli</h2>
        <p className="mt-3 leading-relaxed">
          Gemensam frukost på Herrgården. Utcheckning kl 12:00 från Annexet, för den som önskar är
          man välkommen att umgås med oss i herrgården under onsdagen innan man åker hemåt.
        </p>
      </div>
    </div>
  )
}
