function opencity(event,cityname){
    var i,tabcontent,tablinks
    tabcontent=document.getElementsByClassName("tabcontent")
    Array.from(tabcontent).forEach(tab=>{
        tab.style.display="none"
    })
    tablinks=document.getElementsByClassName("tablinks")
    Array.from(tablinks).forEach(btn=>{
        btn.className=btn.className.replace(" active","")
    })
    document.getElementById(cityname).style.display="block"
    event.target.className+=" active"
}
document.getElementById("default").onmouseover()