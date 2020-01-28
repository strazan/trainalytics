import React from 'react'
import './style/SelectionItem.scss'

export default function SelectionItem({ route, isOnTime }) {
  return (
    <div className="selectionItem">
      <div className="routeContainer">
        <p className="text-normal text-color-gray">{route}</p>
      </div>
      <span
        className={isOnTime ? 'background-color-green' : 'background-color-red'}
      ></span>
      <p className="isOnTime text-normal text-color-gray ">
        {isOnTime ? 'On time' : 'Delayed'}
      </p>
    </div>
  )
}
