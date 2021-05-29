import Layout from '../components/Layout';
import styles from '../styles/about.module.css';

export default function About(){
    // {/* //https://api.github.com/repos/nighthawkcoders/csa-society/contributors */}

    return (
        <Layout pageTitle="About">
            <div className={styles.container}>

                <h1>Created by students. for students.</h1>

                <p>Tests can be hard and the best way to study is to pour countless hours on practice. The second best way is to review this website</p>
                <p>Society of Coders allows peer-to-peer collaboration on test-prep for computer science.</p>

            </div>
        </Layout>
    )
}