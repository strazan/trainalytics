import React from 'react'
import './style/SelectionItem.scss'

export default function SelectionItem({ route, isOnTime }) {
  return (
    <div className="selectionItem">
      <h2>{route}</h2>
      <span></span>
      <h2>{isOnTime}</h2>
    </div>
  )
}
