var hbtn=document.querySelector(".hbtn")
var sbtn=document.querySelector(".sbtn")
var box=document.querySelector(".box")

hbtn.addEventListener("click",()=>{
 box.style.visibility="hidden"
})

sbtn.addEventListener("click",()=>{
 box.style.visibility="visible"
})