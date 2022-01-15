function myfunction(){
    var input,li,a,ul
    input=document.getElementById("mysearch").value.toUpperCase()
    li=document.getElementsByTagName("li")
    for(var i=0;i<li.length;i++){
        if(li[i].textContent.toUpperCase().indexOf(input)>-1){
            li[i].style.display=""
        }
        else{
            li[i].style.display="none"
        }
    }
}