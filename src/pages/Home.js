import React, { useContext } from 'react'
import { WeatherContext } from '../Context';
import { Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const { cityName, setCityName, fetchCurrentWeather, fetchWeatherForecast } = useContext(WeatherContext);
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchCurrentWeather();
    fetchWeatherForecast();
    navigate('/weather');
  }
  const handleResetCityName = () =>{
    setCityName("");
  }
  return (
    <div className='bg-black min-h-screen text-2xl relative'>
      <h1 className='text-sky-500 font-bold text-4xl py-4 px-8'>Cloudcast</h1>
      <form onSubmit={handleFormSubmit} className='searchCity relative '>
        <button type="submit"><FontAwesomeIcon icon={faSearch} className='absolute top-4 left-4 text-sky-400 hover:text-sky-500' /></button>
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder='Enter City Name:'
          className='px-12 rounded-lg focus:outline-none hover:cursor-pointer h-14 shadow-md shadow-slate-800'
        />
        <FontAwesomeIcon icon={faCircleXmark} className='absolute top-4 right-4 text-sky-300 cursor-pointer hover:text-sky-500' onClick={handleResetCityName}/>
      </form>
    </div>
  )
}

export default Home