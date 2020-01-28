import React, { useState } from 'react'
import './style/RouteSelection.scss'
import SelectionItem from './SelectionItem'

export default function RouteSelection({ delays, setActiveDelay }) {
  const [selectionItems, setSelectionItems] = useState()
  const [loaded, setLoaded] = useState(false)

  const setActive = i => {
    setActiveDelay(delays.data[i])
  }
  function loadItems() {
    if (!loaded) {
      const items = delays.data.map((delay, i) => {
        const onTime = parseInt(delay.predicted_delay_minutes) ? true : false
        return (
          <SelectionItem
            index={i}
            key={i}
            route={delay.route}
            isOnTime={onTime}
            setActive={setActive}
          />
        )
      })
      setSelectionItems(items)
    }
    setLoaded(true)
  }

  if (delays && !loaded) loadItems()
  return (
    <div className="RouteSelection">
      <span
        className="upArrow"
        onClick={e => {
          e.currentTarget.parentElement.scrollBy(0, -75)
        }}
      ></span>

      {selectionItems}

      <span
        className="downArrow"
        onClick={e => {
          e.currentTarget.parentElement.scrollBy(0, 75)
        }}
      ></span>
    </div>
  )
}
