import type { Metadata } from 'next'
import Link from 'next/link'
import { Lora } from 'next/font/google'

import './globals.css'
import NavLink from './nav-link'

const serif = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Angelica och Nils · 15 Juli 2025',
  icons: {
    icon: 'https://fav.farm/❤️',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`bg-beige text-zinc-950 ${serif.variable}`} lang="sv">
      <body className="font-serif md:text-lg">
        <div className="mx-auto max-w-4xl px-4 sm:px-12">
          <header className="mt-12 text-center sm:mt-20">
            <h1 className="ml-1">
              <div className="text-base tracking-[5px] uppercase">– 15 Juli 2025 –</div>
              <div className="mt-3 text-3xl tracking-widest uppercase sm:mt-6 sm:text-5xl sm:tracking-[8px]">
                Angelica & Nils
              </div>
            </h1>
          </header>
          <nav className="bg-beige sticky top-0 z-10 -mx-4 mt-1 flex justify-center gap-3 overflow-scroll sm:mt-3 sm:gap-6">
            <NavLink href="/">Hem</NavLink>
            <NavLink href="/brollopet">Bröllopet</NavLink>
            <NavLink href="/info">Info</NavLink>
            <NavLink href="/osa">O.S.A</NavLink>
            <NavLink href="/kontakt">Kontakt</NavLink>
          </nav>

          <main className="mt-8 sm:mt-14">{children}</main>

          <footer className="relative mt-12 mb-12 flex justify-center border border-black/10 sm:mt-20 sm:mb-24">
            <div className="bg-beige absolute -mt-4 flex h-8 items-center">
              <span className="px-4 tracking-[5px] uppercase">Bröllopsdag om</span>
            </div>
            <div className="grid w-full grid-cols-2 gap-6 px-6 py-12 sm:grid-cols-4">
              <div className="text-center">
                <div className="font-serif text-5xl md:text-7xl">215</div>
                <div className="mt-1 text-sm tracking-widest uppercase sm:text-base">Dagar</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-5xl md:text-7xl">08</div>
                <div className="mt-1 text-sm tracking-widest uppercase sm:text-base">Timmar</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-5xl md:text-7xl">45</div>
                <div className="mt-1 text-sm tracking-widest uppercase sm:text-base">Minuter</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-5xl md:text-7xl">29</div>
                <div className="mt-1 text-sm tracking-widest uppercase sm:text-base">Sekunder</div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
