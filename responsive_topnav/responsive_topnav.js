// Array.from(document.getElementsByClassName("bars")).forEach(b=>{
//     b.style.backgroundColor="white"
// })
function openmenu(){
    var bars=document.getElementsByClassName("bars")
    Array.from(bars).forEach(bar=>{
        bar.classList.toggle("change")
    })
    var topnav=document.getElementById("mytopnav")
    if(topnav.className==="topnav"){
        topnav.className+=" responsive"
    }
    else{
        topnav.className="topnav"
    }
    document.querySelector(".menu-icon").classList.toggle("aftermenu")
}