import React from 'react'
import './style/SelectionItem.scss'

export default function SelectionItem({ route, isOnTime }) {
  return (
    <div className="selectionItem">
      <h2 className=".text-small .text-color-gray">{route}</h2>
      <span></span>
      <h2 className=".text-small .text-color-gray">{isOnTime}</h2>
    </div>
  )
}
