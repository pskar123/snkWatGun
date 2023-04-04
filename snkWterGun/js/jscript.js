let user =prompt("Enter S,W, or G")
let cpu1 =Math.floor(Math.random()*3)
let cpu=["S","W","G"][cpu1]
const match = (cpu,user)=>{
    if(cpu==user)
    {
        return "drow";
    }
    else if(cpu=="G"&& user =="W")
    {
        return "you"
    }
    else if(cpu=="G"&& user=="S")
    {
        return "loose"
    }
    else if(cpu="W"&& user=="S")
    {
        return "you"
    }
    else if(cpu=="W"&& user=="G")
    {
        return "you"
    }
    else if(cpu=="S"&& user=="W")
    {
        return "loose"
    }
    else if(cpu=="S"&& user=="G")
    {
        return "you"
    }


  
}
let result=match(cpu,user)
document.write(`CPU:${cpu} <br>`)
document.write(` User: ${user}<br>`)
document.write(` The winner is: ${result}<br>`)