import React, { useContext } from 'react'
import { WeatherContext } from '../WeatherContext'

const Weather = () => {
  const {weather,loading} = useContext(WeatherContext);
  function convertUnixToDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
}

if(loading){
  return <h2>Loading...</h2>
}

return (
    <ul>
      <li>City Name : {weather.name}</li>
      <li>Longitude : {weather.coord.lon}</li>
      <li>Latitude : {weather.coord.lat}</li>
      <li>Weather description : {weather.weather[0].description}</li>
      <li>Temperature : {weather.main.temp}K</li>
      <li>Feels Like : {weather.main.feels_like}K</li>
      <li>Humidity : {weather.main.humidity}%</li>
      <li>Maximum Temperature : {weather.main.temp_max}K</li>
      <li>Minnimum Temperature : {weather.main.temp_min}K</li>
      <li>Atmospheric Pressure on Sea Level : {weather.main.sea_level}hPa</li>
      <li>Atmospheric Pressure on Ground Level : {weather.main.grnd_level}hPa</li>
      <li>Visibility : {weather.visibility}m</li>
      <li>Wind Speed : {weather.wind.speed}m/s</li>
      <li>Wind Direction : {weather.wind.deg}</li>
      <li>Wind Gust : {weather.wind.gust}</li>
      <li>Cloudiness : {weather.clouds.all}%</li>
      <li>Time of Data : {convertUnixToDate(weather.dt)}</li>
      <li>Shift from UTC : {weather.timezone}s</li>
    </ul>
  )
}

export default Weather