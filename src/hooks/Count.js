import React, {useState} from 'react';

const Count = () => {
    const [count, setCount]=useState(0)

    // function increase(){
    //     setCount(count+1)
    // }

  return <>
    
    <center>

        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)} className='btn btn-primary'>Increase</button> <br/>
        {
          count >0 && <button onClick={()=>setCount(count-1)} className='btn btn-primary'>Decrease</button>
        }
    </center>


  </>;
};

export default Count;
