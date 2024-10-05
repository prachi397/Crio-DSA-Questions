import React, { useEffect, useState } from "react";
import axios from "axios";

const PromiseAll = () => {
    const [data, setData] = useState({ posts: [], comments: [], album: [] });
    useEffect(() => {
        fetchData();
        console.log(data);
    }, []);

    async function fetchData() {
        try {
            let postUrl = "https://jsonplaceholder.typicode.com/posts";
            let commentUrl = "https://jsonplaceholder.typicode.com/comments";
            let albumUrl = "https://jsonplaceholder.typicode.com/albums";

            // const delay = (ms, promise)=>{
            //     new Promise((resolve, reject)=> setTimeout(()=>resolve(promise), ms));
            // }
            
            // Promise.allSettled --> method return an object
            const [postData, commentData, albumData] = await Promise.allSettled(
                [
                    axios.get(postUrl),
                    axios.get(commentUrl),
                    axios.get(albumUrl)
                ]
            );
            setData({
                posts: postData.value.data,
                comments: commentData.value.data,
                album: albumData.value.data
            });

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            {
                Object.entries(data).map(([key, value]) => (
                    <div key={key}>
                        <h3>{key.toUpperCase()}</h3>
                        {
                            value.map((item, index) => (
                                <>
                                <p key={index}>
                                <b>{`${item.id}. `}</b>{item.title ? item.title : JSON.stringify(item)}
                                </p>
                                </>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}
export default PromiseAll;