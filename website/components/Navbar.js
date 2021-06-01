import Link from 'next/link';
import SearchBar from './SearchBar';
import styles from './Navbar.module.css';

export default function Navbar(){
    return (
        <nav className={styles.navbar}>
            <div className={styles.navItem}>
                <Link href="/">
                    <i className={"fas fa-home " + styles.navItem__home}></i>
                    {/* <span className={styles.navItem__home}>Home</span> */}
                </Link>
            </div>
            
            <div className={styles.navFiller}></div>

            <div className={styles.navItem}>
                {/* <SearchBar /> */}
                <Link href="/search">
                    <i className={"fas fa-search " + styles.navItem__home}></i>
                </Link>
            </div>
            
            <div className={styles.navItem}>
                <a href="https://github.com/nighthawkcoders/csa-society"
                target="_blank"
                className={"fab fa-github "+styles.navItem__text}></a>
            </div>

        </nav>
    )
}