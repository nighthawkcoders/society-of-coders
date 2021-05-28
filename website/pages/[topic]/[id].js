import Link from 'next/link';
import Layout from '../../components/Layout';
import { getFolderIds, getPostDataByFileName } from '../../lib/postdata';
import styles from '../../styles/post.module.css';

export default function Post({ postData, topic, id }){

    return (
        <Layout pageTitle={postData.title}>
            <div className={styles.container}>
                <div className={styles.container__box}>
                    <div className={styles.title}>
                        <small><i class="fas fa-caret-left"></i> <Link href={`/${topic}`}>{`Back to ${topic}`}</Link></small>
                        <h1>{postData.title}</h1>
                        <div className={styles.meta_info}>
                            {/* <p>Unit 1</p> */}
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.content} dangerouslySetInnerHTML={{__html:postData.htmlContent}}></div>
                    

                    <div className={styles.bottom}>
                        <a href={postData.webPath} 
                        target="_blank" 
                        className={styles.link}><span className="fas fa-pencil-alt "></span> Edit This Page</a>
                        <small><i>Contributed by {postData.author} | {postData.date} </i></small>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getFolderIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostDataByFileName(params.topic, params.id);
    return {
        props: {
            postData,
            topic:params.topic,
            id:params.id
        }
    }
}