const url1 = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=fbcf836cec761e369e64b49c8b420878";
const url2 = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=fbcf836cec761e369e64b49c8b420878";


fetch(url1)
    .then(response => response.json())
    .then(jsonObject => {
        document.getElementById("current").innerHTML = jsonObject.weather[0].description;
        document.getElementById("temp").innerHTML = Math.ceil(jsonObject.main.temp_min);
        document.getElementById("speed").innerHTML = jsonObject.wind.speed;
        document.getElementById("humidity").innerHTML = jsonObject.main.humidity;   
        
        // let windchill = Math.ceil(35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + 
        //                 (0.4275 * temp * Math.pow(speed,0.16)));
        document.getElementById("chill").innerHTML = jsonObject.wind.deg;
})

fetch(url2)
    .then(response => response.json())
    .then(jsonObject => {
        // let time_of_day = jsonObject.list.filter(time => {
        //     time.dt_txt.includes("18:00:00");
        // })
        for (let i = 0; i < jsonObject.list.length; i++)
        {
            let evening_time = jsonObject.list[i]["dt_txt"];
            let new_date = evening_time.substr(0, evening_time.indexOf(' '));

            if ((evening_time.substr(evening_time.indexOf(' ') + 1)) == "18:00:00")
            {
                let new_div = document.createElement('div');
                let day = document.createElement('h3');
                let image = document.createElement('img');
                let temp = document.createElement('p');

    
                // request a weekday along with a short date
                day.innerHTML = new Date(new_date).toLocaleString('en-us', {weekday:'short'});

                
                // temperature of that day
                temp.innerHTML = Math.ceil(jsonObject.list[i].main.temp) + "℉";

                image.setAttribute('src', "http://openweathermap.org/img/wn/" + jsonObject.list[i].weather[0].icon + ".png")
    
                image.setAttribute('alt', jsonObject.list[i].weather[0].description);

                new_div.appendChild(day);
                new_div.appendChild(image);
                new_div.appendChild(temp);

                document.querySelector('div.five-days-weather').appendChild(new_div);

            }
        }
})