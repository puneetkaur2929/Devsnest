const arrayobj=[
    {
     question:"Who is Sports minister of India?",
        option1:"Kiren Rijiju",
        option2:'Ramesh Pokhriyal Nishank',
        option3:'Anurag Thakur',
        option4:'Rajvardhan Singh Rathore',
        ans:'ans3'
    },
    {
        question:"Which female Sports Person will be flag bearer in Tokyo Olympics 2021?",
        option1:"PV Sindhu",
        option2:'Sania Mirza',
        option3:'Dutee Chand',
        option4:'MC MaryKom',
        ans:'ans4'
    },
    {
        question:"Who is present Chief Justice of India?",
        option1:"NV Ramana",
        option2:'Prashant Bhushan',
        option3:'Sharab Borde',
        option4:'Ashok Bhushan',
        ans:'ans1'
    },
    {
        question:"Who is Chief Minister of Tamil Nadu?",
        option1:"Chandrababu Naidu",
        option2:'M.V Stalin',
        option3:'Pinarayi Vijayan',
        option4:'BS Yediyurappa',
        ans:'ans2'
    },
    {
        question:"Who is Chief Of Defence Staff Of India?",
        option1:"BS Dhanoa",
        option2:'MM Naravane',
        option3:'Rajnath Singh',
        option4:'Bipin Rawat',
        ans:'ans4'
    }
]
const questions=document.querySelector('.question');
const opt1=document.querySelector('#option1');
const opt2=document.querySelector('#option2');
const opt3=document.querySelector('#option3');
const opt4=document.querySelector('#option4');
const options=document.querySelectorAll('.options');
const scorearea=document.querySelector('#scorearea');
const myscore=document.querySelector('.myscore');
const total=document.querySelector('.total');
const playagain=document.querySelector('.playagain');

let questioncount=0;
let score=0;
const loadquestion=()=>{
    const questionobj=arrayobj[questioncount];
    questions.innerHTML=questionobj.question;
    opt1.innerHTML=questionobj.option1;
    opt2.innerHTML=questionobj.option2;
    opt3.innerHTML=questionobj.option3;
    opt4.innerHTML=questionobj.option4;
    
}
loadquestion();
const ansclicked = () => {
    let anschoosen;
    options.forEach((currentans)=> {
        if(currentans.checked){
            anschoosen=currentans.id;

        }
        
    });
    
  
    return anschoosen;
    
}
const deselect =()=>{
    let anschoosen;
    options.forEach((currentans)=> currentans.checked=false) ;
}
const submit=document.querySelector('.submit');
submit.addEventListener('click', function(){
    const checkedans= ansclicked();
    if(checkedans===arrayobj[questioncount].ans){
        score++;
        
    }
    questioncount++;
    deselect();
    if(questioncount<arrayobj.length){
        
        loadquestion();
    }else{
        myscore.innerHTML=score;
        total.innerHTML=arrayobj.length;
        scorearea.classList.remove('box');
        document.querySelector('.cont').classList.toggle('hidden');
    }
    
});

playagain.addEventListener('click',function(){
    questioncount=0;
    scorearea.classList.add('box')
    document.querySelector('.cont').classList.toggle('hidden');
    score=0;
    loadquestion();
})
