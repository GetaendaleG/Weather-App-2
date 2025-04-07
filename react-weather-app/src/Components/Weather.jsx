import React from 'react'
import search_icon from '../assets/search.png'
import './weather.css'
import clear_icon from '../assets/clear.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'
const Weather = () => {
    const search = async (city)=>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
        }catch(error){

        }
    }


  return (
    <div className='weather'>
        <div className="search">
            <input type="text" placeholder='Search' />
            <img className='search-icon' src={search_icon} alt="search icon" />
        </div>
        <img src={clear_icon} alt="clear weather icon" className="weather-icon" />
        <p className='temprature'>16°c</p>
        <p className='location'>London</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt="" />
                <div className='inner-div'>
                    <p>91%</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={wind_icon} alt="humidity icon" />
                <div className='inner-div'>
                    <p>3.6 Km/hr</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather