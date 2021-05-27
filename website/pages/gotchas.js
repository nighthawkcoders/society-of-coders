import Link from 'next/link';
import Layout from '../components/Layout';
import { getFolderData } from '../lib/postdata';
import styles from '../styles/Gotchas.module.css';

export default function Gotchas({ allPostData }){
    // redo this
    return (
        <Layout>
            <div className={styles.container}>

                <div className={styles.container__box}>
                    <h1>Gotchas</h1>

                    <div className={styles.container__rowbox}>
                        <div className={styles.description}>
                            <p className={styles.lead}>Beyond the basics of Java, there are many hidden nuances in the language that you can be tested on.</p>
                            <p className={styles.lead}>Stay ahead of the curve and be confident in your answers by going over some commonly missed aspects of Java.</p>

                            <p className={styles.editText}>
                                <a href="https://github.com/nighthawkcoders/csa-society/blob/main/CONTRIBUTING.md" target="_blank">See something missing? <span className={styles.underline}>Add it here!</span></a>
                            </p>
                        </div>

                        <div className={styles.content}>
                            <ol>
                                {allPostData.map((data) => {
                                    return (
                                        <li className={styles.link} key={data.id}>
                                            <Link href={"/gotchas/"+data.id}>{data.title}</Link>
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

export async function getStaticProps() {
    const allPostData = getFolderData("gotchas");
    return {
        props: {
            allPostData
        }
    }
}