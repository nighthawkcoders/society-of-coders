import Navbar from '../components/Navbar';
import Head from 'next/head'
import styles from './Layout.module.css';

export default function Layout({ children, pageTitle, helpIconPresent }){
    return (
        <div className={styles.main_container}>
            <Head>
                <title>{pageTitle ? pageTitle : "Home"} | Society of Coders</title>
                <meta name="description" content="The Society of Coders is a student-contributed repository of java knowledge to optimize study time."/>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
            </Head>

            <Navbar/>

            <div className={styles.children}>
                {children}
            </div>

            <footer className={styles.footer}>
                Created by the <a href="https://nighthawkcoders.cf/" className={styles.link}>Nighthawk Society of Coders</a>
            </footer>

            {helpIconPresent ? 
                <div className={styles.helpIcon}>
                    <span>Learn More</span>
                </div> 
            : <></>}

        </div>
    )
}

/*
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path fill="#000000" d="M58.2,-22C64.8,1.4,52.2,27.9,30.2,44.6C8.3,61.2,-23,68,-41.5,55.1C-60,42.1,-65.6,9.5,-56.6,-17.3C-47.5,-44,-23.8,-64.9,1,-65.2C25.8,-65.5,51.6,-45.3,58.2,-22Z" transform="translate(100 100)" />
    <p style={{color:"white"}}>Hellio</p>
</svg>
*/