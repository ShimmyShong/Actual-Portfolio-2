import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.svg'

const Header = () => {
  return (
    <header>
      <nav className='px-[1rem] sm:px-[2rem] lg:px-[10rem] py-8 flex justify-between items-center font-semibold text-2xl border-b'>
        <p>Logo</p>
        <ul className='flex flex-row gap-10 font-medium *:border-b'>
          <li className='hover-underline-animation hover:border-b-[#eb7e00] transition-all'>
            <Link href="/">About Me</Link>
          </li>
          <li className='hover-underline-animation hover:border-b-[#eb7e00] transition-all'>
            <Link href="/skills">Skills</Link>
          </li>
          <li className='hover-underline-animation hover:border-b-[#eb7e00] transition-all'>
            <Link href="/projects">Projects</Link>
          </li>
          <li className='hover-underline-animation hover:border-b-[#eb7e00] transition-all'>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
