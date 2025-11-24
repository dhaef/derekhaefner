import Head from 'next/head';
import styles from './index.module.css';
import Link from 'next/link';

export default function Test() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Derek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.flexContainer}>
        <div className={styles.meContainer}>
          <img src="/me.jpg" loading="lazy" alt="me" className={styles.me} />
          <h2 className={styles.name}>Derek Haefner</h2>
        </div>
        <div style={{ margin: '0 10px' }}>
          <div className={styles.linkContainer}>
            <Link href="/projects">
              Projects
            </Link>
            <Link href="/story">
              Story
            </Link>
            <Link href="/resume">
              Resume
            </Link>
            <Link href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
