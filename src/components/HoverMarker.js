import React, { useRef, useState, useEffect } from 'react'
import { Marker } from 'react-map-gl'
import HoverInfo from './HoverInfo.js'

function useHover() {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  const enter = () => setHovered(true)

  useEffect(() => {
    const node = ref.current
    console.log(node)
    if (node) {
      node.addEventListener('mouseenter', enter)
      node.addEventListener('mouseleave', () => {
        setHovered(false)
      })
      return () => {
        node.removeEventListener('mouseenter', enter)
        node.removeEventListener('mouseleave', () => {
          setHovered(false)
        })
      }
    }
  }, [ref])

  return [ref, hovered]
}

export default function HoverMarker({ children, longitude, latitude }) {
  const [ref, hovered] = useHover()
  return (
    <div ref={ref}>
      <Marker longitude={longitude} latitude={latitude}>
        {children}
        {hovered ? <HoverInfo /> : ''}
      </Marker>
    </div>
  )
}
