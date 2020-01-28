import React, { useState, useEffect } from 'react'
import './App.css'
import './base/_color.scss'
import './base/_text.scss'
import Map from './components/Map'
import SideNav from './components/SideNav'
import InfoTab from './components/InfoTab'
import { InfoTabContext } from './components/InfoTabContext'
const axios = require('axios').default

function App() {
  const [delays, setDelays] = useState()
  const [activedelay, setclickdelay] = useState(false)
  const [index, setIndex] = useState(-1)

  useEffect(() => {
    axios.get('http://localhost:8000/delay').then(response => {
      setDelays(response)
    })
  }, [])
  return (
    <div className="App">
      <Map />
      <div style={{ position: 'fixed', top: '0', left: '0', display: 'flex' }}>
        <InfoTabContext.Provider
          value={{ activedelay, setclickdelay, index, setIndex }}
        >
          <SideNav delays={delays} />
          <InfoTab delays={delays} />
        </InfoTabContext.Provider>
      </div>
    </div>
  )
}

export default App

// this.props.setclicked.bind(delay.station)
