import React, { useState, useEffect } from 'react'
import './App.css'
import DelayMap from './components/DelayMap'

const axios = require('axios').default
function App() {
  const [delays, setDelays] = useState()

  useEffect(() => {
    axios.get('http://localhost:8000/delays').then(response => {
      setDelays(response.data)
    })
  }, [])

  return (
    <div className="App">
      <DelayMap delays={console.log(delays)} />
    </div>
  )
}

export default App
