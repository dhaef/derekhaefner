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
                    <Link href="/" className={styles.name}>Derek Haefner</Link>
                    <div className={styles.navItems}>
                        <Link href="/projects" className={styles.navItem}>Projects</Link>
                        <Link href="/story" className={styles.navItem}>Story</Link>
                        <Link href="/resume" className={styles.navItem}>Resume</Link>
                        <Link href="/contact" className={styles.navItem}>Contact</Link>
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
                        <Link href="/" className={styles.dropdownItem}>Home</Link>
                        <Link href="/projects" className={styles.dropdownItem}>Projects</Link>
                        <Link href="/story" className={styles.dropdownItem}>Story</Link>
                        <Link href="/resume" className={styles.dropdownItem}>Resume</Link>
                        <Link href="/contact" className={styles.dropdownItem}>Contact</Link>
                    </div>}
                </div>
            </nav>
            {children}
        </div>
    );
}

export default Layout