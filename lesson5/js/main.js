window.addEventListener('load', ()=>{
    const ham = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    ham.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')},false);

    window.onresize = () => {if(window.innerWidth >760) mainnav.classList.remove('responsive');};


    
    let date = new Date("01/29/2021");
    document.getElementById('date').innerHTML = date.toDateString();
});



/************************************************ 
* PANCAKE BANNER
************************************************/
let day = new Date();
let currentDay = ["Monday", 
                  "Tuesday", 
                  "Wednesday", 
                  "Thursday", 
                  "Friday", 
                  "Saturday",
                  "Sunday"]
    
if (currentDay[day.getDay()] === "Friday")
    document.getElementById('banner').style.display = "display";
else
    document.getElementById('banner').style.display = "none";



/************************************************ 
* WAYFINDING CURRENT PAGE
************************************************/
