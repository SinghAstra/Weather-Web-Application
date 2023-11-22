import React, { useState } from "react";

export const WeatherContext = React.createContext();

export function WeatherProvider(props) {
    const [cityName, setCityName] = useState("");
    const [weather, setWeather] = useState("");
    const fetchWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setWeather(data);
            })
    }
    return <WeatherContext.Provider value={{ cityName, setCityName, weather, fetchWeather }}>
        {props.children}
    </WeatherContext.Provider>
}