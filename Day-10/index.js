const cards=document.querySelectorAll('.flipcard');
var currentscore=document.querySelector('.score');
var currentmove=document.querySelector('.move');
let hasfliped=false;
let lockboard=false;
let firstcard,secondcard;
let score=0;
let move=0;

function flipcard(){
  if(lockboard) return;
  if(this===firstcard) return;
  this.classList.add('flip');
  if(!hasfliped){
    hasfliped=true;
    firstcard=this;
  }
  else{
    hasfliped=false;
    secondcard=this;
    checkmatch();
  }
  
}
function checkmatch(){
 (firstcard.dataset.name === secondcard.dataset.name)?disablecard():unflipcard();

}
function disablecard(){
  firstcard.removeEventListener('click',flipcard);
  secondcard.removeEventListener('click',flipcard);
  score+=1;
  currentscore.innerHTML=score;
  reset();
}
function unflipcard(){
  lockboard=true;
  setTimeout(()=>{
    firstcard.classList.remove('flip');
    secondcard.classList.remove('flip');
    lockboard=false;
    move+=2;
    currentmove.innerHTML=move;
    reset();
  },1500);
 
}
function reset(){
  hasfliped=false;
  lockboard=false;
  firstcard=null;
  secondcard=null;
}
(function shuffle(){
  cards.forEach(card=>{
    let randomnum= Math.floor(Math.random()*12);
    card.style.order=randomnum;
  });
})();
cards.forEach(card => card.addEventListener('click',flipcard));