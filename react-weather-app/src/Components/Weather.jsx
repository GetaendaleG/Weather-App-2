import React, { useEffect, useRef, useState } from 'react'
import search_icon from '../assets/search.png'
import './weather.css'
import clear_icon from '../assets/clear.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'
const Weather = () => {
    const [weatherData,setWeatherData] = useState(false);
    const inputRef  = useRef();
    const search = async (city)=>{
        if(city===""){
            alert('Enter city Name');
            return;
        }
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;


            const response = await fetch(url);
            const data  = await response.json();
            console.log(data);
            
            setWeatherData(
                {
                    humidity: data.main.humidity,
                    wind: data.wind.speed,
                    tempreture: Math.floor(data.main.temp),
                    location: data.name,
                    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

                }
            )
        }catch(error){
            console.error("Error fetching weather data:", error);
            alert("Failed to fetch weather data. Please try again.");
        }
    }
    useEffect(()=>{
        search("dire dawa")
    },[])

  return (
    <div className='weather'>
        <div className="search">
            <input 
                ref={inputRef} 
                type="text" 
                placeholder="Search" 
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        search(inputRef.current.value);
                    }
                }} 
            />
            <img 
                className="search-icon" 
                onClick={() => {
                    search(inputRef.current.value);
                }} 
                src={search_icon} 
                alt="search icon" 
            />
        </div>
        <img src={weatherData.icon} alt="clear weather icon" className="weather-icon" />
        <p className='temprature'>{weatherData.tempreture}°c</p>
        <p className='location'>{weatherData.location}</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt="" />
                <div className='inner-div'>
                    <p>{weatherData.humidity}%</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={wind_icon} alt="humidity icon" />
                <div className='inner-div'>
                    <p>{weatherData.wind} Km/hr</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather