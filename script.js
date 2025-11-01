
let userevent;
document.getElementById("secsec").style.display = "none";
document.getElementById("thirdsec").style.display = "none";

function aftereserve(index){
    userevent = document.getElementById(index);
    document.getElementById('allsec').style.display = "none";
    document.getElementById("secsec").style.display = "flex";
    document.getElementById("thirdsec").style.display = "none";
    console.log(userevent);

    const imgUrl = userevent.querySelector("img").src;
    const title = userevent.querySelector("h2").textContent;
    const descritpion = userevent.querySelector(".details").innerHTML;
    const price = userevent.querySelector("h3").textContent;


    document.querySelector("#dots > .selected-event").innerHTML= `
        <div class="dotimg">
            <img src="${imgUrl}" width="100%" />
            <h1 class="tit">${title}</h1>
            <div class="dets" id="detsss">
        <ul class="uls">
            <li>${descritpion}</li>
            
        </ul>
        </div>
    `;

    // document.getElementById("dots").innerHTML=userevent.outerHTML;
    // document.getElementById("dots").querySelector('.events').style.width = "100%";
    // document.getElementById("dots").querySelector('.events > img').style.width = "100%";
}

// let secondpage = document.getElementById('dots');
// secondpage.innerText=userevent;

function retour(){
    
    document.getElementById('allsec').style.display = "block";
    document.getElementById("secsec").style.display = "none";
    document.getElementById("thirdsec").style.display = "none";
   document.querySelector(".count > span").textContent = ("1") ;

}


function continuer(){
    document.getElementById('allsec').style.display = "none";
    document.getElementById("secsec").style.display = "none";
    document.getElementById("thirdsec").style.display ="block"
}
// console.log(document.getElementById('dots'))





const btnDencrement = document.querySelector(".count > .decrease")
const btnIncrement = document.querySelector(".count > .increase")
const counter = document.querySelector(".count > span")

btnDencrement.addEventListener("click",DecrementEventFun);
btnIncrement.addEventListener("click",IncrementEventFun);


function DecrementEventFun() {
    if (Number(counter.textContent) > 0) {
        counter.textContent = Number(counter.textContent) - 1;
    }
    
}
function IncrementEventFun() {
        counter.textContent = Number(counter.textContent) + 1;
}
document.getElementById("submit").addEventListener("click",function (event){

event.preventDefault();
var tele = document.getElementById("telee").value;
var email = document.getElementById("eem").value;
var emailregex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;
var teleregex = /^\d.{10,}$/;
if (!emailregex.test(email)){
    alert("Invalid email!")
}
if(!teleregex.test(tele)){
    alert("Invalid phone number!");
}
else{
    alert("Ajoute avec succée");
}
});
var liste = document.getElementById("liste");
