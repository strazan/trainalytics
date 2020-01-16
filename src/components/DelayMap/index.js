import React, { useState } from 'react'
import ReactMapGL, { Marker, Layer } from 'react-map-gl'

import './index.css'

export default function DelayMap() {
  const MAPBOX_TOKEN =
    'pk.eyJ1Ijoic3RyYXphbjEiLCJhIjoiY2s1aDQwcDV3MDc4MjNkbzFyc3g5azBrOCJ9.qThW1EzHhwgWPuJ26GwWBg'
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 59.334591,
    longitude: 15.06324,
    zoom: 6
  })

  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/strazan1/ck5h43imr02up1io7x81z9v5i"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    ></ReactMapGL>
  )
}
