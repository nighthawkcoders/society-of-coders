import Layout from '../components/Layout';
import Card from '../components/Card';
import { CLASSES } from '../lib/global';
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
              {CLASSES.map((class_) => {
                return (
                  <Card title={class_.title} toUrl={class_.url} />
                )
              })}
          </div>

          <div className={styles.about}>
            {/* <p className={styles.lead}><Link href="/about">Learn more!</Link></p> */}
          </div>
          

        </main>

      </div>
    </Layout>
  )
}
