const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch (requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);

        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) 
        {
            // let three_town = JSON.stringify(towns);
            // let set = new Set(['Preston', 'Soda Springs', 'Fish Haven']);
            if ((towns[i].name === 'Preston') || (towns[i].name === 'Soda Springs') 
                || (towns[i].name === 'Fish Haven'))
            {
                let card = document.createElement('section');
                let div = document.createElement('div');
                let h2 = document.createElement('h2');
                let motto = document.createElement('h3');

                let year = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');
                let image = document.createElement('img');

                h2.innerHTML = towns[i].name;
                motto.innerHTML = towns[i].motto;
                year.innerHTML = "Year Founded: " + towns[i].yearFounded;
                population.innerHTML = "Population: " + towns[i].currentPopulation;
                rainfall.innerHTML = "Annual Rainfall: " + towns[i].averageRainfall;
                image.setAttribute('src', 'images/' + towns[i].photo);

                div.appendChild(h2);
                div.appendChild(motto);
                div.appendChild(year);
                div.appendChild(population);
                div.appendChild(rainfall);
                card.appendChild(image);

                document.querySelector('div.cards').appendChild(card).appendChild(div);
                
                
            }
        }
    })

