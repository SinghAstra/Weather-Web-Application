import React from 'react'

const Weather = ({weather}) => {
  console.log("weather is ",weather);
  const isDay = weather.weather[0].icon.includes('d');

  return (
    <div className='wc'>
    <div className='weather-container'>
      
        <h3>Temp:{weather.main.temp-273}°C | {weather.weather[0].description}</h3>
        <h2>{weather.name},{weather.sys.country}</h2>
    </div>
    <h1>Weather Info</h1>
    </div>
  )
}

export default Weather