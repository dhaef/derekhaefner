import Layout from '../components/layout';
import styles from './resume.module.css';

export default function Resume() {
  return (
    <Layout>
      <h1 className={styles.title}>Resume</h1>
      <div className={styles.picContainer}>
        <img
          src="/Derek_Haefner_Resume-1.png"
          loading="lazy"
          className={styles.pic}
        />
      </div>
    </Layout>
  );
}
