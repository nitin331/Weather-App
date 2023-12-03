import React, { useState } from "react"
const api={
    key :"ca9df05c31ff1e8c7cce77a84d4e65be",
    base :"https://api.openweathermap.org/data/2.5/",
}

const Weather=()=>{
    const[search,setSearch]=useState("");
    const[weather,setWeather]=useState({});

    function searchPress(){
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then(res=>res.json())
        .then(data=>setWeather(data))
    }
    return(
        <div className="Weather">
         <header className="App-Header">
            <h1>Weather App</h1>
            <input type="text" placeholder="Search Here" onChange={(e)=>setSearch(e.target.value)}></input>
            <button onClick={searchPress}>Search</button>
            
            <div>
                {(typeof weather.main !=="undefined")?(
                    <div>
                    <p>Place:{weather.name}</p>
                    <p><i class="fa-solid fa-fan fa-spin" style={{color:"orange"}}></i>Temp:{weather.main.temp}</p>
                    <p>Cloud/Rain:{weather.weather[0].main}</p>
                    <p>Description:{weather.weather[0].description}</p>
                    </div>
                ):("Not Found")}
            </div>
         </header>
        </div>

    )
}
export default Weather