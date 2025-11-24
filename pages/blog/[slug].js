import Head from 'next/head';
import Layout from '../../components/layout';
import styles from './blog.module.css';
import { marked } from 'marked';
import { createClient } from '@supabase/supabase-js'

export async function getServerSideProps(context) {
  const { query } = context
  const client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

  const { data, error } = await client
    .from('derek_haefner_blog')
    .select('*')
    .eq('slug', query.slug)

  if (error) {
    console.log(error)
  }

  return { props: { post: data[0] } }
}

export default function Blogs({ post }) {
  const htmlContent = marked.parse(post.content,
    { gfm: true, breaks: true })

  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.body}>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
