import Layout from '../components/layout';
import styles from './resume.module.css';
import Head from 'next/head';

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Resume</h1>
      <div className={styles.picContainer}>
        <img src="/derek_resume-1.png" loading="lazy" className={styles.pic} />
      </div>
    </Layout>
  );
}
