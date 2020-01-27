import React from 'react'
import { useState } from 'react'
import { Marker } from 'react-map-gl'
import './style/DelayMarkers.scss'

export default function DelayMarkers({ delays }) {
  const [delayMarkers, setDelayMarkers] = useState()
  const [loaded, setLoaded] = useState(false)

  function loadMarkers() {
    if (!loaded) {
      const markers = delays.data.map((delay, i) => {
        return delay.pos.longitude ? (
          <Marker
            key={i}
            longitude={delay.pos.longitude}
            latitude={delay.pos.latitude}
          >
            <div
              className={
                // (
                'marker'
                // ,
                // parseInt(delay.predicted_delay_minutes)
                //   ? 'marker-green'
                //   : 'marker-red')
              }
            ></div>
          </Marker>
        ) : (
          ''
        )
      })
      console.log(markers)
      setDelayMarkers(markers)
    }
    setLoaded(true)
  }
  if (delays && !loaded) loadMarkers()
  return <div>{delayMarkers}</div>
}
