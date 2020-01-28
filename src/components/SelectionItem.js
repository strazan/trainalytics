import React from 'react'
import './style/SelectionItem.scss'

export default function SelectionItem({ route, isOnTime, setActive, index }) {
  return (
    <div
      onClick={e => {
        setActive(index)
      }}
      className="selectionItem"
    >
      <div className="routeContainer">
        <p className="text-normal text-color-gray">{route}</p>
      </div>
      <span
        className={isOnTime ? 'background-color-green' : 'background-color-red'}
      ></span>
      <p className="text-normal text-color-gray ">
        {isOnTime ? 'On time' : 'Delayed'}
      </p>
    </div>
  )
}
