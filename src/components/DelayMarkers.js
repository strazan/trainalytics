import React from 'react'
import { useState } from 'react'

export default function DelayMarkers(data) {
  const [selectionItems, setSelectionItems] = useState()

  return <div>{selectionItems}</div>
}
