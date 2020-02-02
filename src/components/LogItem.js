import React, { useState, useEffect } from 'react'
import './style/LogItem.scss'

export default function LogItem({ logTime, estArrival, calDelay, accuracy }) {
  const [accuracyColor, setAccuracyColor] = useState()
  useEffect(() => {
    setAccuracyColor(() => {
      switch (accuracy) {
        case '60%':
          return 'delay-red'
        case '70%':
          return 'delay-yellow'
        case '80%':
          return 'delay-yellow'
        default:
          return 'delay-green'
      }
    })
  }, [accuracy])

  return (
    <tr className="LogItem">
      <td>
        <h2 className="text-normal text-color-light-gray">{logTime}</h2>
      </td>
      <td>
        <h1 className="text-normal text-color-gray">{estArrival}</h1>
      </td>
      <td>
        <h1 className="text-normal text-color-gray">{`${calDelay} min`}</h1>
      </td>
      <td>
        <h2 className={accuracyColor}>{accuracy}</h2>
      </td>
    </tr>
  )
}
