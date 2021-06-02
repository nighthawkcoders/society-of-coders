import TopicLayout from '../components/TopicLayout';
import { getFolderData } from '../lib/postdata';

export default function Lessons({ topicData }){
    const sentences = [
        "CSP Big Ideas.",
    ]
    return (
        <TopicLayout topicData={topicData} title="Big Ideas" sentences={sentences}/>
    )
}

export async function getStaticProps() {
    const topicData = getFolderData("bigIdeas");
    return {
        props: {
            topicData
        }
    }
}