let temp = document.getElementById('temp').innerHTML;
let speed = document.getElementById('speed').innerHTML;
let chill = document.getElementById('chill');

let windChill = () => {
    if ((temp >= 50) && (speed > 3))
    {
        chill.innerText = Math.round(35.74 + (0.6215 * temp) - (35.75 * (speed) ** 0.16) + 
                    (0.4275 * temp * ((speed)**0.16))) + "℉";
    }
    else {
        chill.innerText = "N/A";
    }
}
window.addEventListener('load', windChill);