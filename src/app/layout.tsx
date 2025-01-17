import type { Metadata } from 'next'
import { Lora, Parisienne } from 'next/font/google'

import '~/globals.css'
import NavLink from '~/components/nav-link'
import { CountDown } from '~/components/countdown'
import Link from 'next/link'

const serif = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

const script = Parisienne({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-script',
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
    <html className={`bg-beige text-zinc-950 ${serif.variable} ${script.variable}`} lang="sv">
      <body className="font-serif">
        <div className="mx-auto max-w-4xl px-4 sm:px-12">
          <header className="mt-12 text-center sm:mt-20">
            <Link tabIndex={-1} href="/" className="ml-1 block">
              <div className="font-script text-xl leading-1 sm:text-2xl">
                Bienvenue à notre mariage
              </div>
              <div className="mt-4 text-3xl tracking-widest uppercase sm:mt-6 sm:text-5xl sm:tracking-[8px]">
                Angelica & Nils
              </div>
              <div className="mt-2 text-sm tracking-[5px] uppercase sm:mt-4 sm:text-base">
                – 15 Juli 2025 –
              </div>
            </Link>
          </header>
          <nav className="bg-beige sticky -top-px z-10 -mx-4 mt-8 flex justify-center gap-4 sm:mt-12 sm:gap-6">
            <div className="absolute w-full">
              <div className="absolute h-px w-full border-t border-dashed border-black/50"></div>
              <div className="from-beige to-beige absolute h-px w-full bg-gradient-to-r via-transparent"></div>
            </div>
            <NavLink href="/">Hem</NavLink>
            <NavLink href="/brollopet">Bröllopet</NavLink>
            <NavLink href="/info">Info</NavLink>
            <NavLink href="/osa">O.S.A</NavLink>
            <NavLink href="/kontakt">Kontakt</NavLink>
            <div className="absolute top-full w-full">
              <div className="absolute h-px w-full border-t border-dashed border-black/50"></div>
              <div className="from-beige to-beige absolute h-px w-full bg-gradient-to-r via-transparent"></div>
            </div>
          </nav>

          <main className="mt-8 sm:mt-12">{children}</main>

          <footer className="relative mt-12 mb-12 flex justify-center border border-dashed border-black/20 sm:mt-20 sm:mb-24">
            <div className="bg-beige absolute -mt-4 flex h-8 items-center">
              <span className="px-4 tracking-[5px] uppercase">Bröllopet</span>
            </div>
            <CountDown />
          </footer>
        </div>
      </body>
    </html>
  )
}
