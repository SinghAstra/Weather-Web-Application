import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import City from "./components/City";


function App() {
  const [city,setCity] = useState();
  const [weather,setWeather] = useState();
  console.log("Inside App.js city is ",city);
  useEffect(()=>{
    if(city){
    const fetchWeather = () =>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res=>res.json())
      .then(data=>{
        console.log("city is ",city);
        setWeather(data);
      })
    }
    fetchWeather();
  }
  },[city])
  return (
    <div className="container">
      <h1 className="app-label">CloudCast</h1>
      {city&&weather?<Weather/>:<City city={city} setCity={setCity}/>}
    </div>
  );
}

export default App;
