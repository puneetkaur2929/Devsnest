import { useState } from "react"

const Count =()=>{
    const [count,setCount]=useState(0);
    return(
       <button className="count" onClick={
           ()=>{
               const newcount=count+1;
               setCount(newcount);
           }
       }>
           {count}
       </button>
    )
}
export default Count;