var btn1=document.querySelector("#btn1")
var btn2=document.querySelector("#btn2")
class employee
{
    constructor()
    {
    this.name="anil"
    this.age=18
    this.salary=18000
    }

getData()
{
    this.name=prompt("Enter name ")
    this.age=prompt("Enter age ")
    this.salary=prompt("Enter salary ")
}
showData()
{
    console.log(this.name+"\t"+this.age+"\t"+this.salary)
}
}

var ob=new employee()
{
    btn1.addEventListener("click",()=>{
        ob.getData()
    })

    btn2.addEventListener("click",()=>{
        ob.showData()
    })
}