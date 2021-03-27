const reqURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(reqURL)
    .then(res => res.json())
    .then(jsonObject => {
        let event = document.getElementById("event");
        let slice = jsonObject.towns[0].events.slice(",");
        
        event.innerText = slice.join('\n');
        console.log(slice);
    })