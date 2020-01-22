import React, { useEffect } from 'react'
import './App.css'
import DelayMap from './components/DelayMap'
const axios = require('axios').default

function App() {
  return (
    <div className="App">
      <DelayMap />
    </div>
  )
}

export default App
