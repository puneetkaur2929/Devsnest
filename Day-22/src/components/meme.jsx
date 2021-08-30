import "../index.css"
const Meme=({meme,setmeme})=>{
    // console.log(meme);
return (


    <div className='meme'>
        <img src={meme.url} alt="" />

        <div>
            {[...Array(meme.box_count)].map((_,index)=>(
                <input type="text" placeholder={`Meme caption ${index+1}`} />
            ))}
            
        </div>
        <div>
           <button className="btn">Create Meme</button>
           <button className="btn1" onClick={()=>{
               setmeme(null);
           }}> Choose Template</button>
        </div>
    </div>
   
) ;
}
export default Meme;