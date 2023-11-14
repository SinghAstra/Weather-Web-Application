import React from 'react'
import { WeatherIcons } from '../App';
import WeatherInfoComponent from './WeatherInfoComponent';

const Weather = ({ weather }) => {
  const isDay = weather.weather[0].icon.includes('d');
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
  }
  return (
    <div className='weather-container'>
      <img src={WeatherIcons[weather.weather[0].icon]?WeatherIcons[weather.weather[0].icon]:WeatherIcons["01d"]} alt='weather-icon' className='weatherIcon' />
      <h3>Temp:{Math.floor(weather.main.temp - 273)}°C | {weather.weather[0].description}</h3>
      <h2>{weather.name},{weather.sys.country}</h2>
      <div className='weather-info'>
      <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"} value={getTime(weather.sys[isDay ? 'sunset' : 'sunrise'])}/>
      <WeatherInfoComponent name={"humidity"} value={weather.main.humidity}/>
      <WeatherInfoComponent name={"wind"} value={weather.wind.speed}/>
      <WeatherInfoComponent name={"pressure"} value={weather.main.pressure}/>
      </div>
    </div>
  )
}

export default Weather