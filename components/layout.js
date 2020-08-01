import styles from './layout.module.css'
import Link from 'next/link'
import React, { useState } from 'react'
import useWindowDimensions from '../hooks/dimensions'

function Layout({ children }) {
    const [showNav, setShowNav] = useState(false);
    const { width, height } = useWindowDimensions();

    return (
        <div className={styles.container}>
            <nav>
                {width > 768
                    ? <div className={styles.lgnav}>
                        <Link href="/"><img src="/Background.png" alt="Derek Logo" className={styles.logo} /></Link>
                        <Link href="/"><a className={styles.name}>Derek Haefner</a></Link>
                        <div className={styles.navItems}>
                            <Link href="/projects"><a>Projects</a></Link>
                            <Link href="/story"><a>Story</a></Link>
                            <Link href="/resume"><a>Resume</a></Link>
                            <Link href="/contact"><a>Contact</a></Link>
                        </div>
                    </div>
                    : <div className={styles.smnav}>
                        <div className={styles.smHead}>
                            {/* <Link href="/"> */}
                            <img
                                src="/Background.png"
                                alt="Derek Logo"
                                className={styles.logo}
                                onClick={() => setShowNav(!showNav)} />
                            {/* </Link> */}
                            <span className={styles.arrow} onClick={() => setShowNav(!showNav)}>▼</span>
                        </div>
                        {showNav && <div className={`${styles.dropdown}`}>
                            <Link href="/"><a className={styles.dropdownItem}>Home</a></Link>
                            <Link href="/projects"><a className={styles.dropdownItem}>Projects</a></Link>
                            <Link href="/story"><a className={styles.dropdownItem}>Story</a></Link>
                            <Link href="/resume"><a className={styles.dropdownItem}>Resume</a></Link>
                            <Link href="/contact"><a className={styles.dropdownItem}>Contact</a></Link>
                        </div>}
                    </div>}
                {/* <Link href="/"><img src="/background.png" alt="Derek Logo" className={styles.logo} /></Link>
                {dimensions > 768
                    ? <Link href="/"><a className={styles.name}>Derek Haefner</a></Link>
                    : <span className={styles.arrow}>▼</span>}
                {dimensions > 768 && <div className={styles.navItems}>
                    <Link href="/projects"><a>Projects</a></Link>
                    <Link href="/story"><a>Story</a></Link>
                    <Link href="/resume"><a>Resume</a></Link>
                </div>} */}
            </nav>
            {children}
        </div>
    )
}

export default Layout