import React, { useState } from 'react'
import ReactMapGL, { Marker, Layer } from 'react-map-gl'
import './index.css'
const axios = require('axios').default

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
  const [knockOn, setKnockOn] = useState()
  loadKnockOnDelays()

  function loadKnockOnDelays() {
    axios.get('http://localhost:8000/knock-on').then(function(response) {
      let markers = response.data.disruptions.map(function(knock) {
        let lat = knock.station.lat
        let lng = knock.station.lng
        let delayCount = knock.delaycount
        return { latitude: lat, longitude: lng, count: delayCount }
      })
      setKnockOn(markers)
      console.log(knockOn)
    })
  }

  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/strazan1/ck5h43imr02up1io7x81z9v5i"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      {knockOn &&
        knockOn.map(pos => {
          return (
            <Marker latitude={pos.latitude} longitude={pos.longitude}>
              {pos.count}
            </Marker>
          )
        })

      /* <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
        HEJ
      </Marker> */
      }
    </ReactMapGL>
  )
}