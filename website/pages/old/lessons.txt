import TopicLayout from '../components/TopicLayout';
import { getFolderData } from '../lib/postdata';

export default function Lessons({ topicData }){
    const sentences = [
        "Learning the fundamental algorithms and techiques is vital to mastering Java.",
        "The best way to learn is to practice by following along with your own compiler and trying out the code for yourself."
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