import React from 'react'
import { WeatherIcons } from '../App';
import WeatherInfoComponent from './WeatherInfoComponent';

const Weather = ({ weather }) => {
  console.log("weather is ", weather);
  const isDay = weather.weather[0].icon.includes('d');
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
  }
  return (
    <div className='weather-container'>
      <img src={WeatherIcons[weather.weather[0].icon]} alt='weather-icon' className='weatherIcon' />
      <h3>Temp:{Math.floor(weather.main.temp - 273)}°C | {weather.weather[0].description}</h3>
      <h2>{weather.name},{weather.sys.country}</h2>
      <p>{isDay ? "Sunset" : "Sunrise"} : {getTime(weather.sys[isDay ? 'sunset' : 'sunrise'])}</p>
      <p>Humidity : {weather.main.humidity}</p>
      <p>Wind : {weather.wind.speed}</p>
      <WeatherInfoComponent name={"pressure"} value={weather.main.pressure}/>
    </div>
  )
}

export default Weather