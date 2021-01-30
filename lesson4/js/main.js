window.addEventListener('load', ()=>{
    const ham = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    ham.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')},false);

    window.onresize = () => {if(window.innerWidth >760) mainnav.classList.remove('responsive');};


    
    let date = new Date("01/29/2021");
    document.getElementById('date').innerHTML = date.toDateString();
});

