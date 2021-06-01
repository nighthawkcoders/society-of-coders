import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from './SearchBar.module.css';

export default function SearchBar(){

    const router = useRouter();

    const [text, setText] = useState("");
    const [allPostData, setPosts] = useState({});

    useEffect(() => {
        console.log("LOAD DATA");
        fetch('/api/posts').then((res) => {
            res.json().then((data) => {
                setPosts(data);
            });
        })
    }, []);


    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && text !== "") {
            router.push('/search')
        }
      }

    const search = () => {
        if(text === "") return [];
        const validPosts = [];

        for(const key of Object.keys(allPostData)){
            validPosts[key] = [];
            for(const post of allPostData[key]){
                if(post.title.toLocaleLowerCase().includes(text)){
                    validPosts.push(post);
                    if(validPosts.length > 5) return validPosts;
                }
            }
        }
        return validPosts;
    }

    const validPosts = search();
    console.log(validPosts);

    const jsx = validPosts.map((post) => {
        return (
            <Link href={`/${post.topic}/${post.id}`}>
                <div className={styles.result} key={post.id}>
                    <div className={styles.title}>
                        <p className={styles.title__p}>{post.title}</p>
                    </div>
                    <div className={styles.topic}>
                        <small>{post.topic}</small>
                    </div>
                </div>
            </Link>
        )
    });


    // jsx.push((
    //     <div className={styles.result + " " + styles.advancedSearch}>
    //         <div className={""}>
    //             <p><small>Advanced Search</small></p>
    //         </div>
    //     </div>
    // ))

    return (
        <div>
            <input type="text" className={styles.search} value={text} onChange={(event)=>setText(event.target.value)} onKeyDown={(event) => handleKeyDown(event)}/>
            
            {validPosts.length > 0 &&
            
            <div className={styles.results}>
                {jsx}
            </div>
            }
        </div>
    )
}

