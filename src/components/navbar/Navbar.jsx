import React from 'react'
import './navbar.scss'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='nav-left'>
            <Link href='/'>
            <h2>
            Lilsnake
            </h2>
            </Link>
        </div>
        <div className='nav-right'>
            1
        </div>
    </div>
  )
}
