const Card=({food,amount,setfood,})=>{
    return(
        <div className="cont">
        <h1>{food}</h1>
        <h3>You have consumed {amount}</h3>
        <button className="delete">Delete</button>
        <button className="edit">Edit</button>
    </div>
    );
}