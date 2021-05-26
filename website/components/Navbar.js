import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar(){
    return (
        <nav className={styles.navbar}>
            <div className={styles.navItem}>
                <Link href="/">
                    <span className={styles.navItem__home}>Home</span>
                </Link>
            </div>
            
            <div className={styles.navFiller}></div>

        </nav>
    )
}