import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import City from "./components/City";

export const WeatherIcons = {
  "01d": "icons/sunny.svg",
  "01n": "icons/night.svg",
  "02d": "icons/day.svg",
  "02n": "icons/cloudy-night.svg",
  "03d": "icons/cloudy.svg",
  "03n": "icons/cloudy.svg",
  "04d": "icons/perfect-day.svg",
  "04n": "icons/cloudy-night.svg",
  "09d": "icons/rain.svg",
  "09n": "icons/rain-night.svg",
  "10d": "icons/rain.svg",
  "10n": "icons/rain-night.svg",
  "11d": "icons/storm.svg",
  "11n": "icons/storm.svg",
};

function App() {
  const [city,setCity] = useState();
  const [weather,setWeather] = useState();
  useEffect(()=>{
    if(city){
    const fetchWeather = () =>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res=>res.json())
      .then(data=>{
        setWeather(data);
      })
    }
    fetchWeather();
  }
  },[city])
  return (
    <div className="container">
      <h1 className="app-label">CloudCast</h1>
      {city&&weather?<Weather weather={weather}/>:<City city={city} setCity={setCity}/>}
    </div>
  );
}

export default App;
