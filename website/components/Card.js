import cn from 'classnames'
import Link from 'next/link'
import styles from './Card.module.css';

export default function Card({ title, toUrl }){
    
    return (
        <Link href={toUrl || ""}>
        <div className={cn({
            [styles.card]:true,
            [styles.disabled]:!toUrl,
        })}>
            <div className={styles.content}>
                <h3 className={styles.content__title}>{title ? title : "Title"}</h3>

            </div>
        </div>
        </Link>
    )
}