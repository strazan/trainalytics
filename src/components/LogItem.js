import React, { useState, useEffect } from 'react'
import './style/LogItem.scss'

export default function LogItem({
  logTime,
  scheduled,
  predicted_delay_minutes,
  accuracy,
  isLatestPrediction
}) {
  const [accuracyColor, setAccuracyColor] = useState()
  useEffect(() => {
    setAccuracyColor(() => {
      switch (accuracy) {
        case accuracy > 80:
          return 'delay-red'
        case accuracy <= 80 && accuracy > 60:
          return 'delay-yellow'
        default:
          return 'delay-green'
      }
    })
  }, [])

  return (
    <div className="LogItem">
      <h2>{logTime}</h2>
      <h1>{scheduled}</h1>
      <h1>{`${predicted_delay_minutes} min`}</h1>
      <h1 className={accuracyColor}>{accuracy}</h1>
    </div>
  )
}
