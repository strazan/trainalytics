import React, { useState, useEffect } from 'react'
import './App.css'
import Map from './components/Map'
import SideNav from './components/SideNav'
import InfoTab from './components/InfoTab'
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
      <Map delays={delays} />
      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          display: 'flex',
          width: '100%'
        }}
      >
        <SideNav delays={delays} setActiveDelay={setActiveDelay} />
        <InfoTab activeDelay={activeDelay} />
        <Clock />
      </div>
    </div>
  )
}

export default App

// this.props.setclicked.bind(delay.station)
