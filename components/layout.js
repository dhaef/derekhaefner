import styles from './layout.module.css'
import Link from 'next/link'
import React, { useState } from 'react'

function Layout({ children }) {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className={styles.container}>
            <nav>
                <div className={styles.lgnav}>
                    <Link href="/"><img src="/Background.png" loading="lazy" alt="Derek Logo" className={styles.logo} /></Link>
                    <Link href="/"><a className={styles.name}>Derek Haefner</a></Link>
                    <div className={styles.navItems}>
                        <Link href="/projects"><a className={styles.navItem}>Projects</a></Link>
                        <Link href="/story"><a className={styles.navItem}>Story</a></Link>
                        <Link href="/resume"><a className={styles.navItem}>Resume</a></Link>
                        <Link href="/contact"><a className={styles.navItem}>Contact</a></Link>
                    </div>
                </div>
                <div className={styles.smnav}>
                    <div className={styles.smHead}>
                        <img
                            src="/Background.png"
                            loading="lazy"
                            alt="Derek Logo"
                            className={styles.logo}
                            onClick={() => setShowNav(!showNav)} />
                        <span className={styles.arrow} onClick={() => setShowNav(!showNav)}>▼</span>
                    </div>
                    {showNav && <div className={`${styles.dropdown}`}>
                        <Link href="/"><a className={styles.dropdownItem}>Home</a></Link>
                        <Link href="/projects"><a className={styles.dropdownItem}>Projects</a></Link>
                        <Link href="/story"><a className={styles.dropdownItem}>Story</a></Link>
                        <Link href="/resume"><a className={styles.dropdownItem}>Resume</a></Link>
                        <Link href="/contact"><a className={styles.dropdownItem}>Contact</a></Link>
                    </div>}
                </div>
            </nav>
            {children}
        </div>
    )
}

export default Layout