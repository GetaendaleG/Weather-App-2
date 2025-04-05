import React from 'react'
import search_icon from '../assets/search.png'
import './weather.css'
const Weather = () => {
  return (
    <div className='weather'>
        <div className="search">
            <input type="text" placeholder='Search' />
            <img className='search-icon' src={search_icon} alt="search icon" />
        </div>
    </div>
  )
}

export default Weather