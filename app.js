import { APP_ID } from "./env.js";

let button = document.getElementById('button-submit');
let input = document.getElementById('input-value');
let city = document.getElementById('city');
let temp = document.getElementById('temp');
let desc = document.getElementById('desc');

button.addEventListener('click', () => {
    //using Fetch()
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid='+APP_ID)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        const cityName = data.name;
        const tempValue = data.main.temp;
        const descValue = data.weather[0].description;
        
        city.innerHTML = cityName;
        temp.innerHTML = tempValue + " °C";
        desc.innerHTML = descValue;
        console.log("The city name is " + cityName);
        console.log("The temperature is " + tempValue + " C");
        console.log("The weather now is " + descValue);
    })
    .catch(err => {
        alert("Wrong");
    });
})


