import Layout from '../components/Layout';
import Card from '../components/Card';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>

        <main className={styles.main}>
          
          <div className={styles.title}>
            <h1>Society of Coders</h1>
            <p className={styles.lead}>A better way to study computer science.</p>
          </div>

          <div className={styles.featured}>
              <Card title="Gotchas" toUrl="/gotchas"/>

              <Card title="Lessons" toUrl="/lessons"/>
              <Card title="Tips & Tricks"/>
          </div>

          <div className={styles.about}>
          {/* //https://api.github.com/repos/nighthawkcoders/csa-society/contributors */}
            <p className={styles.lead}><Link href="/about">Learn more!</Link></p>
          </div>
          

        </main>

      </div>
    </Layout>
  )
}
