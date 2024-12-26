const apiKey = "33c79d68edc5d4d68dfc3c5c5726a44d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
const weatherIcon = document.getElementById("weatherImg");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector("#weatherImg").style.display = "none";
    }
    else {
        var data = await response.json();
        document.querySelector("#cityName").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector("#percentage").innerHTML = data.main.humidity + "%";
        document.querySelector("#speed").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png";
        }  
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png";
        }
        else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "snow.png";
        }
        document.querySelector(".weather").style.display = "flex";
        document.querySelector("#weatherImg").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})