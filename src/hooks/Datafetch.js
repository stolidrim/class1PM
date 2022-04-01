import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Datafetch = () => {
    const [posts, setPosts] = useState([])
    const [limit, setLimit] = useState(10)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
            .catch(err => console.log(err))
    })

    return (
        <>

        
            {
                posts.slice(0,limit).map(item => (
                    <div className='col-md-3 shadow-lg p-2'>
                        <center><h1>{item.id}</h1></center>
                        <h5 className='text-primary'>{item.title}</h5>
                        <p>{item.body}</p>
                        
                    </div>
                ))
                
            }
            {limit<posts.length &&
            <button className='btn btn-primary m-5' onClick={()=>setLimit(limit+30)}> Load More</button>}
        </>
    )
};

export default Datafetch;
