let form = document.querySelector("form");
let searchInput;

const city = document.getElementById("result-1");
const temp = document.getElementById("result-2");
const humidity = document.getElementById("result-3");
const wind = document.getElementById("result-4");
const description = document.getElementById("weather-description");
const icon = document.getElementById("icon");
const iconUrl = ''


function getValue() {
    searchInput = document.getElementById("search-input").value;
}

async function apiCall(city) {
    let host = getApiUrl();
    let url = `${host}/weather/${city}`;
    try {
        const result = await fetch(url);
        const data = await result.json();
        console.log(result);
        console.log(data)
        document.getElementById("result-1").textContent = data.name;
        temp.textContent = Math.ceil(data.main.temp) + " °C";
        humidity.textContent = data.main.humidity + " %";
        wind.textContent = Math.ceil(data.wind.speed*10) + " KM/H";
        description.textContent = data.weather[0].description;
        icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    } catch(e) {
        console.log(e);
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    apiCall(searchInput);
})

apiCall('paris');