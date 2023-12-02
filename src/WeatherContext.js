import axios from "axios";
import React, { useEffect, useState } from "react";

export const WeatherContext = React.createContext();

export function WeatherProvider(props) {
    const [cityName, setCityName] = useState("");
    const [weather, setWeather] = useState("");
    const [loading,setLoading] = useState();


    const fetchWeatherForecast = () =>{
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(data => {
            setForecast(data.list);
        });
    }

    useEffect(()=>{
        const fetchCurrentWeather = async() => {
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`;
            const response = await axios.get(URL)
            setWeather(response.data);
            setLoading(false);
        }
        if(cityName){
            fetchCurrentWeather();
        }
    },[cityName])
    return <WeatherContext.Provider value={{ 
        cityName,
        setCityName,
        weather,
        loading,
        setLoading
        }}>
        {props.children}
    </WeatherContext.Provider>
}