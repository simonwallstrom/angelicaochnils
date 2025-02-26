export default function Page() {
  return (
    <div className="mt-8 sm:mt-12">
      <h1 className="text-3xl font-medium">Kontakt</h1>
      <p className="mt-4 leading-relaxed sm:mt-6">
        Hör gärna av dig om du har några frågor eller funderingar. Du kan kontakta oss via telefon
        eller e-post.
      </p>
      <h2 className="mt-4 text-xl font-medium sm:mt-6">Angelica Emdebrant</h2>
      <ul className="mt-2 list-disc space-y-1 pl-4">
        <li>076-4124773</li>
        <li>ae87@live.se</li>
      </ul>
      <h2 className="mt-4 text-xl font-medium">Nils Benier Norgren</h2>
      <ul className="mt-2 list-disc space-y-1 pl-4">
        <li>070-4751466</li>
        <li>nils.b.norgren@gmail.com</li>
      </ul>

      <div id="toastpar" className="mt-8 scroll-mt-12 border-t border-dashed border-black/20 pt-8">
        <div>
          Kontakta vårt toastpar om allt som rör planering kring tal, överraskningar och annat som
          förgyller vår dag.
        </div>
      </div>

      <h2 className="mt-4 text-xl font-medium sm:mt-6">Rebecca Wicklén</h2>
      <ul className="mt-2 list-disc space-y-1 pl-4">
        <li>070-9700898</li>
        <li>toastparetwicklen@gmail.com</li>
      </ul>
      <h2 className="mt-4 text-xl font-medium">Gustav Wicklén</h2>
      <ul className="mt-2 list-disc space-y-1 pl-4">
        <li>070-4675532</li>
        <li>toastparetwicklen@gmail.com</li>
      </ul>
    </div>
  )
}
