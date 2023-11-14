import React from 'react'

const City = () => {
  return (
    <div className='city-container'>
      <img src="perfect-day.svg" alt='app-icon' className='city-image'/>
      <h4>Find Weather in your city.</h4>
      <form>
        <input type='text' placeholder='City'/>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default City