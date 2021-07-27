
async function getapi(code){
    let api= await fetch("https://api.covid19api.com/summary");
    let res=await api.json();
    
            const country_name= res.Countries[`${code}`];
            document.querySelector(`.cont-1`).innerHTML=
            ` ${country_name.Country} `
            ;
            document.querySelector(`.cont-2`).innerHTML=
            ` ${country_name.TotalConfirmed} `
            ;
       
            document.querySelector(`.cont-3`).innerHTML=
            ` ${country_name.TotalDeaths} `
            ;
            document.querySelector(`.cont-4`).innerHTML=
            ` ${country_name.TotalRecovered} `
            ;
}
let valueadded=document.querySelector('input').value;
const btn=document.querySelector('.inputbtn');
btn.addEventListener('click', ()=>{
    let valueadded=document.querySelector('input').value;
getapi(valueadded);
})


