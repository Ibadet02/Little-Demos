document.getElementById("default").click()
var i, tabcontent, tablinks
function opencity(event,cityname){
    tabcontent=document.getElementsByClassName("tabcontent")
    for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display="none"
    }
    tablinks=document.getElementsByClassName("tablinks")
    for(i=0;i<tablinks.length;i++){
        tablinks[i].classList.remove("active")
    }
    document.getElementById(cityname).style.display="block"
    event.target.classList.add("active")
    function opencity(event2,cityname2){
        Array.from(tabcontent).forEach(content=>{
            content.style.display="none"
        })
        event2.target.classList.toggle("active")
        if(document.getElementById(cityname2).style.display=="none"){
            document.getElementById(cityname2).style.display="block"
            this.classList.add("active")
        }
        else{
            document.getElementById(cityname2).style.display="none"
            this.classList.remove("active")
        }
    }
}