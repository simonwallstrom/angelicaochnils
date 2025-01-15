import Image from 'next/image'

export default function Page() {
  return (
    <div className="">
      <div className="bg-white p-2 shadow">
        <Image priority src="/ulvhall.jpg" width={2318} height={2019} alt="Angelica och Nils" />
      </div>
      <div className="mt-8 sm:mt-12">
        <h1 className="text-3xl font-medium">Bröllopet</h1>
        <p className="mt-4 leading-relaxed text-pretty">
          Den 14-16 juli 2025 blir det fest och vigsel på Ulvhälls herrgård. Vi hoppas att du vill
          komma och fira med oss!
        </p>
        <h2 className="mt-4 text-xl font-medium sm:mt-8">Måndag 14 juli</h2>
        <p className="mt-3 leading-relaxed">
          Välkommen att checka in från kl 17:00. Rum är förbokade till alla gäster på herrgården
          samt i ett närliggande Annex. Vi tänder grillarna kl 19:00, tag med den dryck du vill
          dricka för kvällen.
        </p>
        <h2 className="mt-4 text-xl font-medium sm:mt-8">Tisdag 15 juli</h2>
        <p className="mt-3 leading-relaxed">
          Dagen börjar med frukost och sedan en enklare lunch innan vigseln. Vigseln sker utomhus,
          vi hoppas självklart på vackert väder, om det mot förmodan skulle regna, medtag paraply
          eller poncho. Vid oväder finns en plan B. Efter vigseln blir det brudskål, middag och fest
          hela natten lång.
        </p>
        <h2 className="mt-4 text-xl font-medium sm:mt-8">Onsdag 16 juli</h2>
        <p className="mt-3 leading-relaxed">
          Gemensam frukost på herrgården. Utcheckning kl 12:00 från Annexet. Om du önskar är man
          välkommen att umgås med oss i herrgården under onsdagen innan avfärd hemåt.
        </p>
      </div>
    </div>
  )
}
