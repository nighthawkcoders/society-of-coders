import {getTopicPaths, getPostsByClassAndTopic} from '../../lib/posts';
import {TOPIC_BY_NAME} from '../../lib/global';
import TopicLayout from '../../components/TopicLayout';

export default function Topic({ className, topic, posts }){
    //console.log(test)'
    const {description, title} = TOPIC_BY_NAME[topic];
    return (
        <TopicLayout class_={className} title={title} sentences={description} topicData={posts}/>
    )
}

export async function getStaticPaths() {
    const paths = getTopicPaths();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const posts = getPostsByClassAndTopic(params.class, params.topic);
    return {
        props: {
            className:params.class,
            topic:params.topic,
            posts
        }
    }
}
