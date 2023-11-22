import React, { useContext } from 'react'
import { WeatherContext } from '../Context'

const Weather = () => {
  const { weather,forecast } = useContext(WeatherContext);
  if (!weather) {
    return <h2>Loading...</h2>
  }
  const getTime = (unixval) => {
    const timestamp = unixval;
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    let formattedHours = hours % 12 || 12;
    formattedHours = formattedHours < 10 ? `0${formattedHours}` : formattedHours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;
    return formattedTime;
  }
  return (
    <div>
      <h3>Current Weather Information</h3>
      <p>Temperature : {Math.round(weather.main.temp - 273)}C</p>
      <p>{weather.name},{weather.sys.country}</p>
      <p>{weather.weather[0].description}</p>
      <p>Wind Speed : {weather.wind.speed}m/s</p>
      <p>Humidity:{weather.main.humidity}%</p>
      <p>Sunrise : {getTime(weather.sys.sunrise)}</p>
      <p>Sunset : {getTime(weather.sys.sunset)}</p>
      <h3>5 day Weather Forecast</h3>
      <ul>
        {forecast.map(item => (
          <li key={item.dt}>
            Date: {item.dt_txt}, 
            Temperature: {Math.round(item.main.temp - 273)}C, 
            Weather: {item.weather[0].description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Weather