import React, { useState, useRef, useEffect } from 'react'
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl'

// import d3 from 'd3-ease'
import './style/Map.scss'
import DelayMarkers from './DelayMarkers'

export default function Map({ delays, activeDelay, setActiveDelay }) {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_KEY
  const [viewport, setViewport] = useState({
    latitude: 59.334591,
    longitude: 11.06324,
    zoom: 5.4,
    pitch: 40
  })

  const map = useRef(null)

  useEffect(() => {
    map.current.getMap().on('moveend', event => {
      setViewport({
        longitude: map.current.getMap().getCenter().lng,
        latitude: map.current.getMap().getCenter().lat,
        zoom: map.current.getMap().getZoom()
      })
    })
  }, [])

  useEffect(() => {
    if (activeDelay && activeDelay.pos.latitude) {
      setViewport({
        ...viewport,
        longitude: activeDelay.pos.longitude,
        latitude: activeDelay.pos.latitude,
        zoom: 11,
        transitionDuration: 2000,
        transitionInterpolator: new FlyToInterpolator()
        // transitionEasing: d3.easeCubic
      })
    }
  }, [activeDelay])

  return (
    <ReactMapGL
      ref={map}
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/strazan1/ck5o56ci700vv1iqfw5w2swpc"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <DelayMarkers delays={delays} setActiveDelay={setActiveDelay} />
    </ReactMapGL>
  )
}
