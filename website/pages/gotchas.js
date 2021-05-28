import TopicLayout from '../components/TopicLayout';
import { getFolderData } from '../lib/postdata';

export default function Gotchas({ topicData }){
    const sentences = [
        "Beyond the basics of Java, there are many hidden nuances in the language that you can be tested on.",
        "Stay ahead of the curve and be confident in your answers by going over some commonly missed aspects of Java."
    ]
    return (
        <TopicLayout topicData={topicData} title="Gotchas" sentences={sentences}/>
    )
}

export async function getStaticProps() {
    const topicData = getFolderData("gotchas");
    return {
        props: {
            topicData
        }
    }
}

// export default function Gotchas({ allPostData }){
//     // redo this
//     return (
//         <Layout pageTitle="Gotchas">
//             <div className={styles.container}>

//                 <div className={styles.container__box}>
//                     <h1>Gotchas</h1>

//                     <div className={styles.container__rowbox}>
//                         <div className={styles.description}>
//                             <p className={styles.lead}>Beyond the basics of Java, there are many hidden nuances in the language that you can be tested on.</p>
//                             <p className={styles.lead}>Stay ahead of the curve and be confident in your answers by going over some commonly missed aspects of Java.</p>

//                             <p className={styles.editText}>
//                                 <a href="https://github.com/nighthawkcoders/csa-society/blob/main/CONTRIBUTING.md" target="_blank">See something missing? <span className={styles.underline}>Add it here!</span></a>
//                             </p>
//                         </div>

//                         <div className={styles.content}>
//                             <ol>
//                                 {allPostData.map((data) => {
//                                     return (
//                                         <li className={styles.link} key={data.id}>
//                                             <Link href={"/gotchas/"+data.id}>{data.title}</Link>
//                                         </li>
//                                     )
//                                 })}
//                             </ol>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </Layout>
//     )
// }