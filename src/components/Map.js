import React, { useState, useEffect } from 'react'
import ReactMapGL from 'react-map-gl'
import './../style/delayMap.css'
import SideNav from './SideNav'
import InfoTab from './InfoTab'
const axios = require('axios').default

export default function Map() {
  const MAPBOX_TOKEN =
    'pk.eyJ1Ijoic3RyYXphbjEiLCJhIjoiY2s1aDQwcDV3MDc4MjNkbzFyc3g5azBrOCJ9.qThW1EzHhwgWPuJ26GwWBg'
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 59.334591,
    longitude: 15.06324,
    zoom: 6
  })

  useEffect(() => {
    axios.get('http://localhost:8000/delay').then(response => {
      console.log(response)
    })
  }, [])

  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/strazan1/ck5o56ci700vv1iqfw5w2swpc"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      {
        <div style={{ display: 'flex' }}>
          <SideNav />
          <InfoTab />
        </div>
      }
    </ReactMapGL>
  )
}
