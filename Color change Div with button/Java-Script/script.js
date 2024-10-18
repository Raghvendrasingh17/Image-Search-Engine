var rbtn=document.querySelector(".rbtn")
var bbtn=document.querySelector(".bbtn")
var gbtn=document.querySelector(".gbtn")
var ybtn=document.querySelector(".ybtn")
var obtn=document.querySelector(".obtn")
var box=document.querySelector(".box")

var t1=document.querySelector(".t1")
var t2=document.querySelector(".t2")


rbtn.addEventListener("click",()=>{
   box.style.backgroundColor="red"
})

bbtn.addEventListener("click",()=>{
    box.style.backgroundColor="blue"
})

gbtn.addEventListener("click",()=>{
    box.style.backgroundColor="green"
})

ybtn.addEventListener("click",()=>{
    box.style.backgroundColor="yellow"
})

obtn.addEventListener("click",()=>{
    box.style.backgroundColor="orange"
})

t1.addEventListener("change",()=>{
    var width=parseInt(t1.value)
    box.style.width=width+"px"
})

t2.addEventListener("change",()=>{
    var width=parseInt(t2.value)
    box.style.width=width+"px"
})