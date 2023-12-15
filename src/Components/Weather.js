import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const api = {
    key: "c70b7c89e5e525983b5acd571c707a37",
    base: "https://api.openweathermap.org/data/2.5/",
}
export default function Weather() {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});
    
    const searchPressed = () => 
    {
        console.log("Okky");
        console.log(search);
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) =>
            {
                setWeather(result)
            }
        )
    }

    return (
    <>
        <div className='bg4'>
        <Header />
        <h1 style={{ color: 'white', marginTop: '200px' }}>Weather</h1>
        <div>
            <input 
                type="text" 
                placeholder="Search any place" 
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchPressed}>Get Weather</button>
        </div>
        
        <Footer />
        </div>
    </>
    );
}
