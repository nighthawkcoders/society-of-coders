import Link from 'next/link';
import Layout from '../components/Layout';
import { getFolderData } from '../lib/postdata';
import styles from '../styles/Gotchas.module.css';

export default function Gotchas({ allPostData }){
    // redo this
    return (
        <Layout>
            <div className={styles.container}>

                {allPostData.map((data) => {
                    return (
                        <div className={styles.b}>
                            <p>{data.author}</p>
                            <p>{data.date}</p>
                            <Link href={"/gotchas/"+data.id}>{data.title}</Link>
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