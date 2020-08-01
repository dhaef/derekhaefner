import Layout from '../components/layout'
import styles from './contact.module.css'

export default function Contact() {
    return (
        <Layout>
            <h1
                className={styles.title}
            >Contact</h1>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <h2>Derek Haefner</h2>
                        <p><strong>Email:</strong> derekhaefner@gmail.com</p>
                        <p><strong>Phone #:</strong> 248-880-2935</p>
                        <div className={styles.iconContainer}>
                            <a href="https://twitter.com/Derek_Haefner"><img src="/twitter.png" alt="twitter" className={styles.icon} /></a>
                            <a href="https://www.linkedin.com/in/derek-haefner-066a98114"><img src="/linkedin.png" alt="linkedin" className={styles.icon} /></a>
                            <a href="https://github.com/dhaef"><img src="/github.png" alt="github" className={styles.icon} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}