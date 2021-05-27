import { useState, useEffect } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(){
    const [text, setText] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log("LOAD DATA");
        fetch('/api/posts').then((res) => {
            res.json().then((data) => {
                setPosts(data);
            });
        })
    }, []);

    const search = () => {
        if(text === "") return [];
        const validPosts = [];
        for(const post of posts){
            if(post.title.toLocaleLowerCase().includes(text)){
                validPosts.push(post);
                if(validPosts.length > 5) return validPosts;
            }
        }
        return validPosts;
    }

    const validPosts = search();
    
    return (
        <div>
            <input type="text" value={text} onChange={(event)=>setText(event.target.value)}/>
            
            {validPosts.length > 0 &&
            
            <div className={styles.results}>
                {validPosts.map((post) => {
                    return (
                        <div className={styles.result} key={post.id}>
                            <div className={styles.title}>
                                <p className={styles.title__p}>{post.title}</p>
                            </div>
                            <div className={styles.topic}>
                                <small>{post.topic}</small>
                            </div>
                        </div>
                    )
                })}
            </div>
            }
        </div>
    )
}

