import React, { useState, useRef, useEffect } from 'react'
import ReactMapGL from 'react-map-gl'
import './style/Map.scss'
import DelayMarkers from './DelayMarkers'

export default function Map({ delays, activeDelay, setActiveDelay }) {
  const MAPBOX_TOKEN =
    'pk.eyJ1Ijoic3RyYXphbjEiLCJhIjoiY2s1aDQwcDV3MDc4MjNkbzFyc3g5azBrOCJ9.qThW1EzHhwgWPuJ26GwWBg'
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
      map.current.getMap().flyTo({
        center: [activeDelay.pos.longitude, activeDelay.pos.latitude],
        zoom: 11,
        speed: 0.8,
        essential: true
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
