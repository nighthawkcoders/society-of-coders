import Layout from './Layout';
import Card from './Card';
import styles from './ClassLayout.module.css';
import Link from 'next/link';

export default function ClassLayout({ class_, class_2 }){
    return (
        <Layout pageTitle={class_.title}>
            <div className={styles.container}>

                <div className={styles.container__box}>
                    <div className={styles.title}>
                        <h1>{class_.title}</h1>
                    </div>

                    <div className={styles.items}>
                        {class_.topics.map((topic) => {
                            return (
                                <Card title={topic} toUrl={`${class_.url}/${topic}`}/>
                            )
                        })}
                    </div>
                    
                    <div className={styles.bottomText}>
                        <Link href={class_2.url}>
                            <small className={styles.switch}>Switch to {class_2.title}</small>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}