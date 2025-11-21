import React from 'react'
import { assets } from '../../assets/assets'
import './App.css'

const App = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br />Fooda App</p>
      <div className="app-download-platfrom">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default App
