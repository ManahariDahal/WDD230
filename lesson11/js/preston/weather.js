const url1 = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=fbcf836cec761e369e64b49c8b420878';
const url2 = 'https:/api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=fbcf836cec761e369e64b49c8b420878';


fetch(url1)
    .then(response => response.json())
    .then(jsonObject => {
        document.getElementById("current").innerHTML = jsonObject.weather[0].description;
        document.getElementById("temp").innerHTML = Math.ceil(jsonObject.main.temp_min);
        document.getElementById("chill").innerHTML = jsonObject.wind.deg;
        document.getElementById("speed").innerHTML = jsonObject.wind.speed;
        document.getElementById("humidity").innerHTML = jsonObject.main.humidity;   
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


                // let current_day = new Array(7);
                // current_day[0] = "Sunday";
                // current_day[1] = "Monday";
                // current_day[2] = "Tuesday";
                // current_day[3] = "Wednesday";
                // current_day[4] = "Thursday";
                // current_day[5] = "Friday";
                // current_day[6] = "Saturday";
        

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