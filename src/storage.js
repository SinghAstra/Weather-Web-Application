// const [city,setCity] = useState();
// const [weather,setWeather] = useState();
// useEffect(()=>{
//   if(city){
//   const fetchWeather = () =>{
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
//     .then(res=>res.json())
//     .then(data=>{
//       setWeather(data);
//     })
//   }
//   fetchWeather();
// }
// },[city])
// return (
//   <div className="container">
//     <h1 className="app-label">CloudCast</h1>
//     {city&&weather?<Weather weather={weather}/>:<City city={city} setCity={setCity}/>}
//   </div>
// );