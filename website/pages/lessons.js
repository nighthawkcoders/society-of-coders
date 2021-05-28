import TopicLayout from '../components/TopicLayout';
import { getFolderData } from '../lib/postdata';

export default function Lessons({ topicData }){
    const sentences = [
        "Beyond the basics of Java, there are many hidden nuances in the language that you can be tested on.",
        "Stay ahead of the curve and be confident in your answers by going over some commonly missed aspects of Java."
    ]
    return (
        <TopicLayout topicData={topicData} title="Lessons" sentences={sentences}/>
    )
}

export async function getStaticProps() {
    const topicData = getFolderData("lessons");
    return {
        props: {
            topicData
        }
    }
}