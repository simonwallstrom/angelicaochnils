import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Angelica och Nils',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-300" lang="en">
      <body>{children}</body>
    </html>
  )
}
