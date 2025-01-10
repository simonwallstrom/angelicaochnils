import type { Metadata } from 'next'
import { Lora } from 'next/font/google'

import '~/globals.css'
import NavLink from '~/components/nav-link'
import { CountDown } from '~/components/countdown'

const serif = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Angelica och Nils · 15 Juli 2025',
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`bg-beige text-zinc-950 ${serif.variable}`} lang="sv">
      <body className="font-serif">
        <div className="mx-auto max-w-4xl px-4 sm:px-12">
          <header className="mt-12 text-center sm:mt-20">
            <h1 className="ml-1">
              <div className="tracking-[5px] uppercase">– 15 Juli 2025 –</div>
              <div className="mt-3 text-3xl tracking-widest uppercase sm:mt-6 sm:text-5xl sm:tracking-[8px]">
                Angelica & Nils
              </div>
            </h1>
          </header>
          <nav className="bg-beige sticky top-0 z-10 -mx-4 mt-1 flex justify-center gap-3 overflow-scroll sm:mt-4 sm:gap-6">
            <NavLink href="/">Hem</NavLink>
            <NavLink href="/brollopet">Bröllopet</NavLink>
            <NavLink href="/info">Info</NavLink>
            <NavLink href="/osa">O.S.A</NavLink>
            <NavLink href="/kontakt">Kontakt</NavLink>
          </nav>

          <main className="mt-8 sm:mt-14">{children}</main>

          <footer className="relative mt-12 mb-12 flex justify-center border border-dashed border-black/20 sm:mt-20 sm:mb-24">
            <div className="bg-beige absolute -mt-4 flex h-8 items-center">
              <span className="px-4 tracking-[5px] uppercase">Bröllopsdag om</span>
            </div>
            <CountDown />
          </footer>
        </div>
      </body>
    </html>
  )
}
