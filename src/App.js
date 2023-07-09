// import './App.css';
import "./components/styles.css"
import hotbg from "./images/hotbg.jpeg"
import coldbg from "./images/coldbg.jpeg"
import Top from "./components/Top.js"
import Desc from "./components/Desc.js"
import { useEffect, useState } from 'react';
import {getData} from "./components/wheather_Services"

function App() {

  const [weather,setWeather]=useState(null);
  const [units,setUnits]=useState("metric");
  const [city,setCity]=useState("Paris");

  const [bg,setBg]=useState("hotbg");

  useEffect(()=>{
    const fetcheatherData=async()=>{
      const data=await getData(city,units)
      setWeather(data);
      
      //dynamic bg
      const threshold=units==="metric"?20:60;
      if(data.temp<=threshold) setBg(coldbg);
      else
      setBg(hotbg);
      
    };
    fetcheatherData();
  },[units,city]);

  const handeleunitsClick=(e)=>{
    const button=e.currentTarget;
    const currentUnit=button.innerText.slice(1);

    const isCelsius=currentUnit==="C";
    button.innerText=isCelsius? "F" : "C";
    setUnits(isCelsius?"metric":"imperial");

  }

  const inputCity=(e)=>{
    if(e.keyCode===13)     //Key code for enter is 13
    {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }

  return (
    <>
    <div className="App" style={{backgroundImage:`url(${bg
    })`}}>
      <div className='overlay'>
       
          {weather &&(
             <div className='container'>
            <div className='section section_inputs'>
            <input type='text' name='city' onKeyDown={inputCity} placeholder='Enter city name..'>
            </input>
            <button onClick={(e)=>handeleunitsClick(e)}>F</button>
          </div>
          
          <div className='section section_temperature'>
            <div className='icon'>
              <h3>{`${weather.name},${weather.country}`}</h3>
              <img src={weather.iconURL} alt="weatherIcon" />
              <h3>{weather.description}</h3>
            </div>
            <div className='temperature'>
              <h1>{`${weather.temp.toFixed()} ${units==="metric"?"C":"F"}`}</h1>
            </div>
            
          </div>
          <Desc weather={weather} units={units}/>
        </div>

          )}
          
        
      </div>
      
      
    </div>
    </>
  );
}

export default App;
