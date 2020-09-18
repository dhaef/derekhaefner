import Head from 'next/head'
import styles from './index.module.css'
import Link from 'next/link'

export default function Test() {
    return (
        <div className={styles.container}>
            <div className={styles.flexContainer}>
                <div className={styles.meContainer}>
                    <img src="/me.jpg" loading="lazy" alt="me" className={styles.me} />
                    <h2 className={styles.name}>Derek Haefner</h2>
                </div>
                <div className={styles.linkContainer}>
                    <Link href="/projects"><a>Projects</a></Link>
                    <Link href="/story"><a>Story</a></Link>
                    <Link href="/resume"><a>Resume</a></Link>
                    <Link href="/contact"><a>Contact</a></Link>
                </div>
            </div>
        </div>
    )
}