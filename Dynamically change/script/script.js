var color=document.querySelector(".color")
var size=document.querySelector(".size")
var title=document.querySelector(".title")

size.addEventListener("change",()=>{
    var t=size.value
    title.style.fontSize=t
})


color.addEventListener("change",()=>{
    var x=color.value
    title.style.color=x
})