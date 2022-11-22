import { ENV } from "./env.js";

let button = document.getElementById('button-submit');
let input = document.getElementById('input-value');
let city = document.getElementById('city');
let temp = document.getElementById('temp');
let desc = document.getElementById('desc');

button.addEventListener('click', () => {
    //using Fetch()
    fetch(ENV.APP_URL+'?q='+input.value+'&units=metric&appid='+ENV.APP_ID)
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


