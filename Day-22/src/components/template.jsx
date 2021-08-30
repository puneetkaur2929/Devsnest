const Template=({templates,setmeme})=>{
    return(
        <div className="cont">
            <h1>Meme Generator</h1>
            {templates.map(template=>(
               <div className="temp" key={template.id} onClick={()=>{
                    setmeme(template);
               }}>
                  <div style={{backgroundImage:`url("${template.url}")`}} className="image"></div>
                   </div>
                
            ))}
        </div>
    );
}
export default Template;