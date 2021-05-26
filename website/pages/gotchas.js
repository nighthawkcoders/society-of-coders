import Layout from '../components/Layout';
import { getFolderData } from '../lib/postdata';
import styles from '../styles/Gotchas.module.css';

export default function Gotchas({ allPostData }){

    return (
        <Layout>
            <div className={styles.container}>

                {allPostData.map((data) => {
                    return (
                        <div className={styles.b}>
                            <p>{data.title}</p>
                            <p>{data.author}</p>
                            <p>{data.date}</p>
                        </div>
                    )
                })}

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