'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri'
type Props = {}

const menuLinks = [
  { id: 1, name: 'خانه', href: '/' },
  { id: 4, name: 'خدمات', href: 'services' },
  { id: 3, name: 'درباره من', href: 'about' },
  { id: 6, name: 'بلاگ', href: 'blogs' },
  { id: 5, name: 'تماس با من', href: 'connect' },
]
const Navbar = (props: Props) => {
  const [hmenu, setHmenu] = useState(true)

  return (
    <nav className="absolute inset-1  md:fixed md:-top-1 md:h-16  flex items-center transition-all z-20 glass rounded-t-none text-white font-semibold">
      <div className="flex justify-center items-center w-1/2 flex-1">
        <button
          className="absolute top-2 right-2 md:hidden z-2"
          onClick={() => setHmenu(!hmenu)}
        >
          {hmenu && <RiMenu4Line />}
        </button>

        <ul onClick={() => setHmenu(!hmenu)} className="flex flex-col gap-4">
          {menuLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <ul className="hidden md:flex">
          {menuLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul> */}
    </nav>
  )
}

export default Navbar
