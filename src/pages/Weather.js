import React, { useContext } from 'react'
import { WeatherContext } from '../Context'

const Weather = () => {
  const { weather } = useContext(WeatherContext);
  if(!weather){
    return <h2>Loading...</h2>
  }
  return (
    <div>
      <h4>Temperature : {Math.round(weather.main.temp-273)}C</h4>
      <h4>{weather.name},{weather.sys.country}</h4>
      <h4>{weather.weather[0].description}</h4>
      <h4>Wind Speed : {weather.wind.speed}</h4>
    </div>
  )
}

export default Weather