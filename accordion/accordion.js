var acc=document.getElementsByClassName("accordion")
Array.from(acc).forEach(element=>{
    element.addEventListener("click",function(){
        this.classList.toggle("active")
        var panel=this.nextElementSibling
        if(panel.style.maxHeight){
            panel.style.maxHeight=null
        }
        else{
            panel.style.maxHeight=panel.scrollHeight+"px"
        }
    })
})