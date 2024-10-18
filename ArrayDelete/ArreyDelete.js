var t1=document.querySelector("#t1")
var btn=document.querySelector("#btn")
var list=document.querySelector("#list")
var names=[]
btn.addEventListener("click",()=>{
    var n
    n=t1.value
    names.push(n)
    display()
})
function display()
{
    var t=""
    names.forEach((item)=>t=t+`<li>${item}<button onclick="remove(${names.indexOf(item)})">Delete</button></li>`)
    list.innerHTML=t
}
function remove(index)
{
    names.splice(index,1);
    display()
}

