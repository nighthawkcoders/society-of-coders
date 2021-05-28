import Layout from './Layout';
import Link from 'next/link';
import styles from './TopicLayout.module.css';

export default function TopicLayout({ topicData, title, sentences }){
    const pathModifier = title.toLowerCase();
    return (
        <Layout pageTitle={title}>
            <div className={styles.container}>

                <div className={styles.container__box}>
                    <h1>{title}</h1>

                    <div className={styles.container__rowbox}>
                        <div className={styles.description}>
                            {sentences && sentences.map((sentence) => {
                                return (
                                    <p className={styles.lead}>{sentence}</p>
                                )
                            })}

                            <p className={styles.editText}>
                                <a href="https://github.com/nighthawkcoders/csa-society/blob/main/CONTRIBUTING.md" target="_blank">See something missing? <span className={styles.underline}>Add it here!</span></a>
                            </p>
                        </div>

                        <div className={styles.content}>
                            <ol>
                                {topicData.map((data) => {
                                    return (
                                        <li className={styles.link} key={data.id}>
                                            <Link href={`/${pathModifier}/`+data.id}>{data.title}</Link>
                                        </li>
                                    )
                                })}
                            </ol>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}