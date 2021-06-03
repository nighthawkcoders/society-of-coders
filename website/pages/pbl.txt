import TopicLayout from '../components/TopicLayout';
import { getFolderData } from '../lib/postdata';

export default function Lessons({ topicData }){
    const sentences = [
        "Project based learning is awesome.",
    ]
    return (
        <TopicLayout topicData={topicData} title="PBL" sentences={sentences}/>
    )
}

export async function getStaticProps() {
    const topicData = getFolderData("pbl");
    return {
        props: {
            topicData
        }
    }
}