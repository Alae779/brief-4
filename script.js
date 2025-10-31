
let userevent;
document.getElementById("secsec").style.display = "none";
function aftereserve(index){
    userevent = document.getElementById(index);
    document.getElementById('allsec').style.display = "none";
    document.getElementById("secsec").style.display = "flex";
    console.log(userevent);

    const imgUrl = userevent.querySelector("img").src;
    const title = userevent.querySelector("h2").textContent;
    const descritpion = userevent.querySelector(".details").innerHTML;
    const price = userevent.querySelector("h3").textContent;



    const btnDencrement = document.querySelector(".count > .decrease")
    const btnIncrement = document.querySelector(".count > .increase")
    const counter = document.querySelector(".count > span")

    btnDencrement.addEventListener("click",()=>{
        counter.textContent= parseInt(counter.textContent)-1;  
    });
    btnIncrement.addEventListener("click",()=>{
        counter.textContent= parseInt(counter.textContent)+1;
    });

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
}
// console.log(document.getElementById('dots'))
