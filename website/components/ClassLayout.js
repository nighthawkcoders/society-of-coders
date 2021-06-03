import Layout from './Layout';
import Card from './Card';
import styles from './ClassLayout.module.css';

export default function ClassLayout({ class_ }){
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
                </div>
            </div>
        </Layout>
    )
}