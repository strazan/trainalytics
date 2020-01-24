import React, { useState, useEffect } from 'react'
import './style/RouteSelection.scss'
import SelectionItem from './SelectionItem'

export default function RouteSelection({ delays }) {
  const [selectionItems, setSelectionItems] = useState()
  const [loaded, setLoaded] = useState(false)

  function loadItems() {
    if (!loaded) {
      console.log(delays)
      const items = delays.data.map((delay, i) => {
        const onTime = parseInt(delay.predicted_delay_minutes) ? true : false
        return <SelectionItem key={i} route={delay.route} isOnTime={onTime} />
      })
      setSelectionItems(items)
    }
    setLoaded(true)
  }
  if (delays && !loaded) loadItems()

  return <div className="RouteSelection">{selectionItems}</div>
}
