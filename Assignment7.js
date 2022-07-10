let time=document.getElementById('time');
let greet=document.getElementById('greet');
let local=document.getElementById('local');
let date=document.getElementById('date');
index=0;
document.addEventListener("keypress",setName);
local.addEventListener("blur",setName);
window.addEventListener("load",()=>{
    localStorage.clear();
});
function showtime(){
    let d=new Date();
    let hour=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();
    let hourS="";
    let minS="";
    let secS="";
    let m="";
    if(hour>=12)
        {m="PM";}
    else
        {m="AM";}
    hour=hour%12;
    if(hour===0)
        hour=12;
    if(hour%10==hour)
        hourS="0"+hour;
    else
        hourS=hour;
    if(min%10==min)
        minS="0"+min;
    else
        minS=min;
    if(sec%10==sec)
        secS="0"+sec;
    else
        secS=sec;
    time.innerHTML=hourS+"<span>:</span>"+minS+"<span>:</span>"+secS+m;
    date.innerHTML=d.toDateString();
    console.log(typeof(hour));
}
function greeting(){
    var d=new Date();
    let g="";
    let src="";
    if(d.getHours()>20 || d.getHours()<=6)
        {g="Good Night";
        document.body.style.backgroundImage='url("../images/night.jpg")';}
    else if(d.getHours()>6 && d.getHours<=12)
        {g="Good Morning";
        document.body.style.backgroundImage='url("../images/morning.jpg")';}
    else if(d.getHours()>12 && d.getHours()<=16)
        {g="Good Afternoon";
        document.body.style.backgroundImage='url("../images/Afternoon.jpg")';}
    else if(d.getHours()>16 && d.getHours()<=20)
        {g="Good Evening";
        document.body.style.backgroundImage='url("../images/Evening.jpg")';}
    
    document.body.style.backgroundSize="cover";
    document.body.style.backgroundPosition="center";
    greet.innerHTML=g;
}
function localS(){
    if(localStorage.getItem("data")===null)
        local.innerHTML="[ENTER NAME]";
    else
        local.innerHTML=localStorage.getItem("data");
}
var str="";
function setName(event){
    event.preventDefault();
    if (event.type === "keypress") {
          if(event.key!=="Enter"){
            str=str+event.key;
            localStorage.setItem("data",str);
            setInterval(localS,100);
          }
          else
          {
          local.blur();
            str="";}
      }
      
}
localS();
greeting();
setInterval(showtime,1000);





