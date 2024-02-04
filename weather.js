const apiKey = "6e7af2150272e71316606f86070edff1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search");
const searchBtn = document.querySelector(".searchbtn");
const weatherIcon = document.querySelector(".weather-img");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".weather-location").innerHTML = data.name;
    
    document.querySelector(".weather-temprature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = Math.round( data.wind.speed) + "km/h";
    document.querySelector(".feels").innerHTML = Math.round(data.main.feels_like) + "°";
    document.querySelector(".pressure").innerHTML = data.main.pressure + "hPa";
    document.querySelector(".visibility").innerHTML = Math.round(data.visibility/1000) + "km";

    if(data.weather[0].clouds === "Clouds" ){
        weatherIcon.src = "./imageBox/2682849_cloud_cloudy_day_forecast_sun_icon.png";
    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "./imageBox/clear.png";
    }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "./imageBox/rain.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "./imageBox/drizzle.png";
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "./imageBox/mist.png";
    }
    else if(data.weather[0].main === "Snow"){
        weatherIcon.src = "./imageBox/snowfall.png";
    }
    else if(data.weather[0].main === "Sunny"){
        weatherIcon.src = "./imageBox/sunny.png";
    }
    else if(data.weather[0].main === "Haze"){
        weatherIcon.src = "./imageBox/haze.png";
    }
    else if(data.weather[0].main === "Fog"){
        weatherIcon.src = "./imageBox/fog.png";
    }
    else if(data.weather[0].main === "Night"){
        weatherIcon.src = "./imageBox/nightcloud.png";
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
