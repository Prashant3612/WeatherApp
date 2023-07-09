import React from 'react'
import "./styles.css"

export default function top() {
  return (
    <>
      <div className='overlay'>
        <div className='container'>
          <div className='section section_inputs'>
            <input type='text' name='city' placeholder='Enter city name..'>
            </input>
            <button>F</button>
          </div>
          
          <div className='section section_temperature'>
            <div className='icon'>
              <h3>London, G8</h3>
              <img src="" alt="weatherIcon" />
              <h3>cloudy</h3>
            </div>
            <div className='temperature'>
              <h1>34 C</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
