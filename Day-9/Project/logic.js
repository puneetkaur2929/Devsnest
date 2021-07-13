
var booked=document.querySelector('.booked');
var rem=document.querySelector('.rem');
var seatsbooked=0;
var remainingseats=36;
booked.innerHTML=seatsbooked;
rem.innerHTML=remainingseats;
var box=document.querySelectorAll('.box');
for(let i=0;i<box.length;i++){
    box[i].addEventListener('click', function(){
        if(box[i].classList.contains('boxclick')){
            box[i].classList.remove('boxclick');
            seatsbooked-=1;
            remainingseats+=1;
            booked.innerHTML=seatsbooked;
            rem.innerHTML=remainingseats;
        }
        else{
            box[i].classList.add("boxclick");
            seatsbooked+=1;
            remainingseats-=1;
            booked.innerHTML=seatsbooked;
            rem.innerHTML=remainingseats;
        }
        });
}
