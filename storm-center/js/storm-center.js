/************************************************ 
* STORM SEVERITY
************************************************/
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}


/************************************************ 
* HAMBURGER MENU
************************************************/
window.addEventListener('load', () => {
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
let currentDay = new Array(7);
currentDay[0] = "Sunday";
currentDay[1] = "Monday";
currentDay[2] = "Tuesday";
currentDay[3] = "Wednesday";
currentDay[4] = "Thursday";
currentDay[5] = "Friday";
currentDay[6] = "Saturday";
if (currentDay[day.getDay()] === "Friday")
    document.getElementById('banner').style.display = "display";
else
    document.getElementById('banner').style.display = "none";




/************************************************ 
* STORM SEVERITY
************************************************/