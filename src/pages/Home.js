import React, { useContext } from 'react'
import { WeatherContext } from '../Context';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const {cityName,setCityName,fetchCurrentWeather,fetchWeatherForecast} = useContext(WeatherContext);
  const navigate = useNavigate();
  const handleFormSubmit = (e) =>{
    e.preventDefault();
    fetchCurrentWeather();
    fetchWeatherForecast();
    navigate('/weather');
  }
  return (
    <div>
      <h2>Home Page</h2>
      <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder='Enter City Name:'
          />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  )
}

export default Home