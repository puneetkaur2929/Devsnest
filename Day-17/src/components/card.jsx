import '../style.css'
const Card =(props)=>{
    const{title,cal}=props;
    return( 
    <div className="card">
    <div className="title">{title}</div>
    <div className="cal">
        You have consumed {cal} cals today
    </div>
</div>
);
   
}
export default Card;    