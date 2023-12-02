import React, { useContext, useState } from 'react'
import { WeatherContext } from '../WeatherContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const {setCityName,setLoading} = useContext(WeatherContext);
    const [city,setCity] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(city.trim()==""){
            alert("Enter City Name :) ")
        }
        setCityName(city);
        setLoading(true);
        navigate("/weather");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text'
            value={city}
            onChange={e=>setCity(e.target.value)}
            placeholder='Enter City ...'
            required
            />
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default Home