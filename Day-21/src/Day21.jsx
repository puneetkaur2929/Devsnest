import { useState } from 'react';
import './style.css'
const Items=({data, calorie,food,setfood,idx})=>{
    const handleedit =()=>{
        
    }
    return(
        <div className="card">
            <h1>{data}</h1>
            <h3>You have consumed {calorie} calories</h3>
            <button className="edit" onClick={handleedit}>Edit</button>
            <button className="del" onClick={()=>{
                const newfood=food.filter((el,i)=>i!==idx);
                setfood(newfood);
            }}>Delete</button>
        </div>
    );
}

const Day21 =()=>{
    const[text,settext]=useState('');
    const[amount,setamount]=useState('');
    const[food ,setfood]=useState([]);
    const handleclick=()=>{
        setfood([...food ,{fooditem :text , calorie:amount }])
         settext("");
         setamount("");
        
     }
    return(
        <div className="main">  
        <input type="text" name="" id="" value={text} placeholder="Item Name" onChange={(e)=>{
            settext(e.target.value);
        }} />
        <input type="number" name="" id="" value={amount} placeholder="Calorie Amount" onChange={(e)=>{
            setamount(e.target.value);
        }} />
        <button className="btn" onClick={handleclick}>Add Items</button>
        {food.map((ele,index)=>(
            <Items data={ele.fooditem}
            calorie={ele.calorie}
            key={index}
            food={food}
            setfood={setfood}
            idx={index}
           />
        ))}
        </div>
       
        
    );
}
export  default Day21;