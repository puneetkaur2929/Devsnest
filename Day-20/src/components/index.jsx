import { useState } from "react";
const data =[
    {
        'id':1,
        'food':'Pizza',
        'calorie':56
    },
    {
        'id':2,
        'food':'Burger',
        'calorie':69
    },
    {
        'id':3,
        'food':'Coke',
        'calorie':500
    },
    {
        'id':4,
        'food':'Fried Rice',
        'calorie':90
    },
    {
        'id':5,
        'food':'Brownie',
        'calorie':180
    },
    {
        'id':6,
        'food':'Pani Poori',
        'calorie':10
    }
];

const  App = () => {
    const [state,setstate]=useState(data);
    return (
        <div className="box">
            {
            state.length > 0 ?(
            data.map((food,key) =>{
                return <Foodlist food={food} state={state} setstate={setstate}/>
               })
       )
         :(
         <h2>Empty Card</h2>
         ) 
       }
            </div>
        
    );
    
}
const Foodlist =({food,state,setstate}) =>{
        let del =()=>{
            let newdata=state.filter((el)=> 
             el.id!==food.id)
             setstate(newdata)
             console.log(newdata);
        };
        
    return(
        <div className="main">
            <div className="first">
            <h2>{food.food}</h2>
            <button className="btn" onClick ={del}>
                 Delete 
             </button>
            </div>
             <h3>
                 {food.food} contains {food.calorie} calories
             </h3>
        </div>
    );
    };
export default App;