'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function NavLink({ children, href }: { children: ReactNode; href: string }) {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <Link
      className={`py-3 underline-offset-4 hover:underline ${pathname === href ? 'underline' : ''}`}
      href={href}
    >
      {children}
    </Link>
  )
}
