import React, { useState, useEffect } from 'react'
import './App.css'
import './base/_color.scss'
import './base/_text.scss'
import Map from './components/Map'
import SideNav from './components/SideNav'
import InfoTab from './components/InfoTab'
const axios = require('axios').default

function App() {
  const [delays, setDelays] = useState()
  useEffect(() => {
    axios.get('http://localhost:8000/delay').then(response => {
      setDelays(response)
    })
  }, [])
  return (
    <div className="App">
      <Map />
      <div style={{ position: 'fixed', top: '0', left: '0', display: 'flex' }}>
        <SideNav delays={delays} />
        <InfoTab />
      </div>
    </div>
  )
}

export default App
