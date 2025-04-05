import React from 'react'
import search_icon from '../assets/search.png'
import './weather.css'
import clear_icon from '../assets/clear.png'
const Weather = () => {
  return (
    <div className='weather'>
        <div className="search">
            <input type="text" placeholder='Search' />
            <img className='search-icon' src={search_icon} alt="search icon" />
        </div>
        <img src={clear_icon} alt="clear weather icon" className="weather-icon" />
        <p className='temprature'>16°c</p>
        <p className='location'>London</p>
    </div>
  )
}

export default Weather