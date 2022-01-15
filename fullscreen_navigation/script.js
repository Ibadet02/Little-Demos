Array.from(document.getElementsByTagName("button")).forEach(e=>{
    e.addEventListener("click",function(){
        document.getElementById("overlay").style.width="100%"
    })
})
document.getElementById("close").addEventListener("click",function(){
    document.getElementById("overlay").style.width="0%"
})