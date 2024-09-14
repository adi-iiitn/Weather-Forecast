const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('search-button');
const weather_image =document.querySelector('.weather-image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body=document.querySelector('.weather-body');

 async function checkWeather(city){
    const api_key = "7c754159f316573cca7124ebaccecf48";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then
    (response => response.json());

    if(weather_data.cod === `404`){
        console.log("error");
        location_not_found.style.display="flex";
        weather_body.style.display="none";
        return;
    }
    else if(weather_data.cod!==`404`){
        weather_body.style.display="flex";
        location_not_found.style.display="none";
    }
   temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
console.log(weather_data);
description.innerHTML = `${weather_data.weather[0].description}`;
humidity.innerHTML = `${weather_data.main.humidity}%`;
windSpeed.innerHTML = `${weather_data.wind.speed}Km/h`;

switch(weather_data.weather[0].main)
{
    case 'Clouds' :
        weather_image.src= "https://tse4.mm.bing.net/th?id=OIP.kIOrOGgjPmQQCkqIB4375QHaEn&pid=Api&P=0&h=180";
        break;
        case 'Light Rain' :
            weather_image.src= "https://tse2.mm.bing.net/th?id=OIP.bRKgL1hkjDzuyB9bxCFHbQHaHa&pid=Api&P=0&h=180";
            break;
            case 'Haze' :
                weather_image.src="https://tse1.mm.bing.net/th?id=OIP.gyzlHs-92AT8wStuBf3wkQHaFj&pid=Api&P=0&h=180";
                break;
}

}



searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});