var open=document.getElementById("opn-button");
open.addEventListener("click",function(){
    document.querySelector(".slide-menu").style.width="200px"
    document.querySelector(".text-container").style.marginLeft="200px"
})
var close=document.querySelector(".cls-button")
close.addEventListener("click",function(){
    document.querySelector(".slide-menu").style.width="0"
    document.querySelector(".text-container").style.marginLeft="0"
})