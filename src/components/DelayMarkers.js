import React from 'react'
import { useState } from 'react'
import { Marker } from 'react-map-gl'
import './style/DelayMarkers.scss'

export default function DelayMarkers({ delays }) {
  const [delayMarkers, setDelayMarkers] = useState()
  const [printedDelays, setPrintedDelays] = useState()

  if (delays !== undefined && delays !== printedDelays) {
    const markers = delays.data.map((delay, i) => {
      const className = `marker ${
        parseInt(delay.predicted_delay_minutes) ? 'marker-green' : 'marker-red'
      }`
      return delay.pos.longitude ? (
        <Marker
          key={i}
          longitude={delay.pos.longitude}
          latitude={delay.pos.latitude}
        >
          <div className={className}></div>
        </Marker>
      ) : (
        ''
      )
    })

    setDelayMarkers(markers)
    setPrintedDelays(delays)
  }

  return <div>{delayMarkers}</div>
}
