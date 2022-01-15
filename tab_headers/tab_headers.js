document.getElementById("default").click()
function city(event,cityname){
    var tabcontent=document.getElementsByClassName("tabcontent")
    var buttons=document.getElementsByTagName("button")
    Array.from(tabcontent).forEach(tab=>{
        tab.style.display="none"
    })
    Array.from(buttons).forEach(btn=>{
        btn.classList.remove("activel")
        btn.classList.remove("activep")
        btn.classList.remove("activet")
        btn.classList.remove("activeo")
    })
    document.getElementById(cityname).style.display="block"
    if(cityname=="london"){
        event.target.classList.add("activel")
    }
    if(cityname=="paris"){
        event.target.classList.add("activep")
    }
    if(cityname=="tokyo"){
        event.target.classList.add("activet")
    }
    if(cityname=="oslo"){
        event.target.classList.add("activeo")
    }
}