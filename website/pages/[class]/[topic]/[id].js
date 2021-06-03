import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import { getPostPaths, getPostContentByTopic } from '../../../lib/posts';
// import { getFolderIds, getPostDataByFileName } from '../../../lib/postdata';
import styles from '../../../styles/post.module.css';

export default function Post({ className, topic, id, postData }){
    const classNameUpper = className.toUpperCase();
    const topicUpper = topic.toUpperCase();

    return (
        <Layout pageTitle={postData.title}>
            <Head>
            <link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/default.min.css" />
            </Head>

            <div className={styles.container}>
                <div className={styles.container__box}>
                    <div className={styles.title}>

                        <div className={styles.meta}>
                            <div>
                                <small>
                                    <i class="fas fa-caret-left"></i> <Link href={`/${className}/${topic}`}>{`Back to ${topic}`}</Link>
                                </small>
                            </div>
                            
                            <div className={styles.meta__right}>
                                <small>{classNameUpper}/{topicUpper}</small>
                            </div>
                        </div>

                        <h1>{postData.title}</h1>
                    </div>
                    <hr/>
                    <div className={styles.content} dangerouslySetInnerHTML={{__html:postData.htmlContent}}></div>
                    

                    <div className={styles.bottom}>
                        <a href={postData.webPath} 
                        target="_blank" 
                        className={styles.link}><span className="fas fa-pencil-alt "></span> Edit This Page</a>
                        <small><i>
                            {postData.author ? 
                            <span>Contributed by <a href={postData.authorLink} target="_blank">{postData.author}</a> | </span> :
                            <span></span>
                            }
                            
                            {postData.date} 
                        </i></small>
                    </div>

                </div>
            </div>
        </Layout>
    )
    
}

export async function getStaticPaths() {
    const paths = getPostPaths();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostContentByTopic(params.topic, params.id);
    return {
        props: {
            className:params.class,
            topic:params.topic,
            id:params.id,
            postData
        }
    }
    
}