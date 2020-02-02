import React, { useEffect, useState, useRef } from 'react'
import { Marker } from 'react-map-gl'
import './style/DelayMarkers.scss'
import HoverMarker from './HoverMarker'

export default function DelayMarkers({ delays, setActiveDelay }) {
  const [delayMarkers, setDelayMarkers] = useState()
  const [printedDelays, setPrintedDelays] = useState()

  if (delays !== undefined && delays !== printedDelays) {
    const markers = delays.data.map((delay, i) => {
      const className = `marker ${
        parseInt(delay.predicted_delay_minutes) ? 'marker-green' : 'marker-red'
      }`

      return delay.pos.longitude ? (
        // <Marker
        //   key={i}
        //   longitude={delay.pos.longitude}
        //   latitude={delay.pos.latitude}
        // >
        //
        // </Marker>
        <HoverMarker
          key={i}
          longitude={delay.pos.longitude}
          latitude={delay.pos.latitude}
        >
          <div
            onClick={() => {
              setActiveDelay(delays.data[i])
            }}
            className={className}
          ></div>
        </HoverMarker>
      ) : (
        ''
      )
    })

    setDelayMarkers(markers)
    setPrintedDelays(delays)
  }

  return <div>{delayMarkers}</div>
}
