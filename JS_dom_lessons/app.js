// console.log("hello")
// var x=document.getElementsByClassName("title")
// Array.from(x).forEach(function(item){
//     console.log(item)
// })
// const z=document.querySelector("#div_id .container");
// console.log(z);
// console.log("hello")
// console.log(document.getElementById("id_button").textContent ="hello")
// var ex1=document.querySelectorAll(".container")
// Array.from(ex1).forEach(function(element){
//     console.log(element.innerHTML)
// })
// var ex2=document.querySelector(".container")
// console.log(ex2.innerHTML)
// console.log(typeof ex2)
// var ex3=document.getElementsByClassName("container")
// console.log(ex3)
// console.log(document.getElementsByTagName("div"))
// console.log(document.querySelectorAll(".container"))
// Array.from(ex3).forEach(element => {
//     console.log(element)
// });
// console.log(document.querySelector("button"))
// console.log(document.getElementsByTagName("button"))
// document.querySelector("button").innerHTML="<span>BUTTON</span>"
// console.log(document.querySelector("div").textContent+="6")
// console.log(document.querySelector("div").innerHTML+="<button>X</button>")
// console.log(document.getElementById("id_button").hasChildNodes())
// console.log(document.querySelector("button").hasChildNodes())
// var s=0
// console.log(document.querySelector("div").hasChildNodes())
// console.log(s)sB
// (Array.from(document.getElementyTagName("div")).forEach(element => {
//     console.log(element.hasChildNodes())
// }))
// console.log((Array.from(document.getElementsByTagName("div"))).forEach(element=>{
//     console.log(element.textContent)
// }))
// console.log(document.querySelector("div").innerText)
// console.log(document.querySelector("div").textContent)
// var mynode=document.querySelector("div")
// var myclonenode=mynode
// var myclonenode=mynode.cloneNode(false)
// console.log(myclonenode)
// console.log(document.querySelector("button").hasChildNodes())
// console.log(document.querySelector("article").children)
// console.log(document.querySelector("article").previousElementSibling)
// var button=document.querySelector("button")
// button.addEventListener("click",function(e){
//     console.log(e.target)
//     console.log(e)
// })
// document.getElementById("id_button").textContent="<span>inner_span</span>"
// console.log(document.getElementById("id_button").addEventListener("click",function(e){
//     console.log(e.target)
//     console.log(e)
// }))
// document.querySelectorAll(".little-box").forEach(function(element){
//     element.querySelector(".delete").addEventListener("click",function(e){
//         const li=e.target.parentElement
//         li.parentNode.removeChild(li)
//     })
// })
// const link=document.querySelector(".delete-box a")
// link.addEventListener("click",function(a){
//     a.preventDefault()
//     console.log("youtube.com is prevented",a,a.target)
// })
var deletebox=document.querySelector(".delete-box")
deletebox.addEventListener("click",function(e){
    if(e.target.className=="delete"){
        deletebox.removeChild(e.target.parentElement)
    }
})
// Array.from(document.forms).forEach(element => {
//     console.log(element)
// });
// document.querySelector(".delete-box a").addEventListener("click",function(a){
//     a.preventDefault()
//     console.log(typeof a)
//     console.log( typeof a.target)
// })
var ourform=document.forms["form1"]
ourform.addEventListener("submit",function(e){
    e.preventDefault()
    const value=ourform.querySelector('input[type="text"]').value
    const little_box=document.createElement("div")
    const name=document.createElement("span")
    const deletebutton=document.createElement("span")
    if(value!=""){
        deletebutton.textContent="delete"
        name.textContent=value
        name.className="name"
        deletebutton.className="delete"
        little_box.className="little-box"
    }
    little_box.appendChild(name)
    little_box.appendChild(deletebutton)
    document.querySelector(".delete-box").appendChild(little_box)
    ourform.querySelector('input[type="text"]').value=""
})