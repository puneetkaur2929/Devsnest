import { useEffect, useState } from "react";
import "./index.css"
import Template from "./components/template";
import Meme from "./components/meme";
function App (){
    const[templates,settemplates]=useState([])
    const[meme , setmeme]=useState(null);
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then((res) =>res.json())
        .then((data) =>{
            settemplates(data.data.memes)
            // console.log(data.data.memes);
        });
    })
return(
    <>
   { meme === null ?<Template templates={templates} setmeme={setmeme} />:
   <Meme meme={meme} setmeme={setmeme} />}

    </>
);
}
export default App;
