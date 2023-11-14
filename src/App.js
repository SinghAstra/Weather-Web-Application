import { useState } from "react";
import Weather from "./components/Weather";
import City from "./components/City";


function App() {
  const [city,setCity] = useState();
  const [weather,setWeather] = useState();
  const fetchWeather = () =>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q=ballia&appid=dbc34bb2e675179a94cde79e7fbab06d")
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
  }
  fetchWeather();
  return (
    <div className="container">
      <h1 className="app-label">CloudCast</h1>
      {city&&weather?<Weather/>:<City setCity={setCity} fetchWeather={fetchWeather}/>}
    </div>
  );
}

export default App;
