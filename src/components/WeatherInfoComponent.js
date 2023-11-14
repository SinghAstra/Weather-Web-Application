import React from 'react'

const WeatherInfoComponent = ({ name, value }) => {
    const WeatherInfoIcons = {
        sunset: "icons/temp.svg",
        sunrise: "icons/temp.svg",
        humidity: "icons/humidity.svg",
        wind: "icons/wind.svg",
        pressure: "icons/pressure.svg",
    };
    return (
        <div className='weatherInfoComponent'>
                <img src={WeatherInfoIcons[name]} alt='weatherInfoIcons' className='infoIcon' />
                <div className='infoValue'>
                    <h5>{name}</h5>
                    <p>{value}</p>
                </div>
        </div>
    )
}

export default WeatherInfoComponent