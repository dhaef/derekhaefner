import Head from 'next/head';
import Layout from '../../components/layout';
import styles from './index.module.css';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js'

export async function getServerSideProps() {
  const client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

  const { data, error } = await client
    .from('derek_haefner_blog')
    .select('*')
    .eq("live", true)

  if (error) {
    console.log(error)
  }

  return { props: { posts: data } }
}

export default function Blog({ posts }) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>Blog</h1>
          <div className={styles.body}>
            {posts.length ? <ul>
              {posts.map(post => <li key={post.id}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                <span className={styles.date}>{formatter.format(new Date(post.created_at))}</span>
              </li>)}
            </ul> : <p>No Posts Found</p>}
          </div>
        </div>
      </div>
    </Layout>
  );
}
