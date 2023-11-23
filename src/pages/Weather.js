import React, { useContext } from 'react'
import { WeatherContext } from '../Context'
import { FiWind } from 'react-icons/fi'
import { FaDroplet } from "react-icons/fa6";

const Weather = () => {
  // const { weather,forecast } = useContext(WeatherContext);
  // if (!weather) {
  //   return <h2>Loading...</h2>
  // }
  // const getTime = (unixval) => {
  //   const timestamp = unixval;
  //   const date = new Date(timestamp * 1000);
  //   const hours = date.getHours();
  //   const minutes = date.getMinutes();
  //   const period = hours >= 12 ? 'PM' : 'AM';
  //   let formattedHours = hours % 12 || 12;
  //   formattedHours = formattedHours < 10 ? `0${formattedHours}` : formattedHours;
  //   const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  //   const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;
  //   return formattedTime;
  // }
  const forecast = [
    {
      "day": "Mon",
      "temp": 32,
      "desc": "Clear"
    },
    {
      "day": "Tue",
      "temp": 32,
      "desc": "Clear"
    },
    {
      "day": "Wed",
      "temp": 32,
      "desc": "Clear"
    },
    {
      "day": "Thu",
      "temp": 32,
      "desc": "Clear"
    },
    {
      "day": "Fri",
      "temp": 32,
      "desc": "Clear"
    }
  ]
  const hourlyForecast = [
    {
      "time": "1 PM",
      "temp": 32,
      "desc": "Clear"
    },
    {
      "time": "2 PM",
      "temp": 32,
      "desc": "Clear"
    },
    {
      "time": "3 PM",
      "temp": 32,
      "desc": "Clear"
    },
    {
      "time": "1 PM",
      "temp": 32,
      "desc": "Clear"
    },
    {
      "time": "4 PM",
      "temp": 32,
      "desc": "Clear"
    },
  ]
  return (
    <div className='bg-white sm:bg-purple-400 md:bg-pink-500 lg:bg-blue-500 xl:bg-yellow-400 flex flex-col lg:flex-row'>
      <div className='bg-red-400 lg:w-9/12 w-screen min-h-screen'>
        <div className='flex justify-between font-extrabold p-3 text-2xl bg-indigo-400'>
          <div>
            <p>Jhansi</p>
            <p>India</p>
          </div>
          <div>
            <p>21-04-23</p>
          </div>
        </div>
        <div className='flex justify-center p-6 bg-teal-400 flex-wrap'>
          <div className='bg-green-400 flex flex-col justify-center items-center'>
            <p className='text-9xl font-extrabold'>20°</p>
            <p className='text-4xl font-extrabold'>Clear Sky</p>
          </div>
          <div className='bg-lime-400 flex flex-col justify-center align-middle'>
            <p className='text-2xl flex font-bold'><FiWind /> 25 m/s</p>
            <p className='text-2xl flex font-bold'><FaDroplet /> 90 %</p>
          </div>
        </div>
        <div>
          <div className='flex justify-center p-6 flex-wrap bg-sky-400'>
            {forecast.map(day => {
              return <div className='flex flex-col bg-cyan-400 justify-between m-2 items-center rounded border-2 p-2'>
                <p className='text-2xl'>{day.day}</p>
                <p className='text-4xl font-semibold'>{day.temp}°</p>
                <p className='text-2xl font-light'>{day.desc}</p>
              </div>
            })}
          </div>
        </div>
      </div>
      <div className='min-h-screen'>
        <div className='flex flex-col justify-center items-center text-3xl font-bold p-3 bg-violet-400'>
          <p>Good Morning</p>
          <p>12:27 PM</p>
        </div>
        <div className='lg:flex justify-center bg-purple-400 p-3 hidden'>
          <div className='bg-fuchsia-400 flex items-center'>
            <p className='text-3xl'>20°</p>
          </div>
          <div className='flex flex-col bg-pink-400'>
            <p className='flex'><FiWind/> 25mph</p>
            <p className='flex'><FaDroplet/> 90%</p>
          </div>
        </div>
        <div className='lg:flex flex-col items-center bg-rose-400 hidden'>
          <p>Feels like 19°</p>
          <p>Cloudy</p>
        </div>
        <div className='flex flex-col items-center p-3'>
          <h3 className='text-3xl font-bold m-2'>Hourly Forecast</h3>
          <div className='flex justify-center flex-wrap'>
          {hourlyForecast.map(hour => {
              return <div className='flex flex-col justify-between m-2 items-center rounded border-2 p-2'>
                <p className='text-2xl'>{hour.time}</p>
                <p className='text-4xl font-semibold'>{hour.temp}°</p>
                <p className='text-2xl font-light'>{hour.desc}</p>
              </div>
            })}
          </div>
        </div>
      </div>
      {/* <h3>5 day Weather Forecast</h3>
      <ul>
        {forecast.map(item => (
          <li key={item.dt}>
            Date: {item.dt_txt}, 
            Temperature: {Math.round(item.main.temp - 273)}C, 
            Weather: {item.weather[0].description}
          </li>
        ))}
      </ul> */}
    </div>
  )
  // return (
  //   <div>
  //     <h3>Current Weather Information</h3>
  //     <p>Temperature : {Math.round(weather.main.temp - 273)}C</p>
  //     <p>{weather.name},{weather.sys.country}</p>
  //     <p>{weather.weather[0].description}</p>
  //     <p>Wind Speed : {weather.wind.speed}m/s</p>
  //     <p>Humidity:{weather.main.humidity}%</p>
  //     <p>Sunrise : {getTime(weather.sys.sunrise)}</p>
  //     <p>Sunset : {getTime(weather.sys.sunset)}</p>
  //     <h3>5 day Weather Forecast</h3>
  //     <ul>
  //       {forecast.map(item => (
  //         <li key={item.dt}>
  //           Date: {item.dt_txt}, 
  //           Temperature: {Math.round(item.main.temp - 273)}C, 
  //           Weather: {item.weather[0].description}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // )
}

export default Weather