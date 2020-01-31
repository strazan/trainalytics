import React, { useState, useEffect } from 'react'
import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map from './components/Map'
import SideNav from './components/SideNav'
import InfoTab from './components/InfoTab'
import HelpTab from './components/HelpTab'
import Clock from './components/Clock'
const axios = require('axios').default

function App() {
  const [delays, setDelays] = useState()
  const [activeDelay, setActiveDelay] = useState()
  useEffect(() => {
    axios.get('http://localhost:8000/delay').then(response => {
      setDelays(response)
    })
  }, [])
  return (
    <div className="App">
      <Map delays={delays} activeDelay={activeDelay} />
      <div className="wrapper">
        <SideNav delays={delays} setActiveDelay={setActiveDelay} />
        <InfoTab activeDelay={activeDelay} />
      </div>
      <Clock />
      <HelpTab />
    </div>
  )
}

export default App

// this.props.setclicked.bind(delay.station)
