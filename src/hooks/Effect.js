import React, {useState, useEffect} from 'react';

const Effect = () => {
    const [count, setCount]=useState(0)
    const [data, setData]=useState(1)

    useEffect(()=>{
        alert("this is the slide effect using useEffect")
    },[])
  return <>
        <center>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}> Click to see result of COUNT</button>
            <br/>
            <h1>{data}</h1>
            <button onClick={()=>setData(data+1)}> Click to see result of DATA</button>
            <br/>

        </center>

  </>;
};

export default Effect;
