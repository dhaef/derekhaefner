import Head from 'next/head';
import Layout from '../../components/layout';
import styles from '../story.module.css';

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>“Hello World!” I’m Derek,</h1>
          <div className={styles.body}>
          </div>
        </div>
      </div>
    </Layout>
  );
}
