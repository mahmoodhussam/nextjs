import React from 'react'
import Link from 'next/link'
import styleNav from '../styles/Nav.module.css'
function Nav() {
    return (
        <nav className={styleNav.nav_container}>
            <div className={styleNav.nav_logo}>
                <h1>Mahmoud</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>

        )
}

export default Nav
