import React from 'react'

const City = ({setCity,city}) => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    setCity(e.target.city.value);
  }
  return (
    <div className='city-container'>
      <img src="icons/perfect-day.svg" alt='app-icon' className='city-image'/>
      <h4>Find Weather in your city.</h4>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='City' name='city'/>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default City