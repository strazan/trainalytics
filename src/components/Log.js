import React from 'react'
import './style/Log.scss'
import LogItem from './LogItem'

export default function Log() {
  const data = {
    logTime: '16:21',
    scheduled: '17:06:00',
    station: 'Malmö C',
    route: 'Hyllie - Göteborg C',
    pos: { longitude: 13.000229772341523, latitude: 55.609718195959864 },
    predicted_delay_minutes: '16',
    predicted_delay_accuracy: '80%'
  }

  return (
    <div className="log">
      <div className="log-labels">
        <h6>Log time</h6>
        <h6>Estimates arrival</h6>
        <h6>Calculated Delay</h6>
        <h6>Accuracy</h6>
      </div>
      <LogItem
        logTime={data.logTime}
        scheduled={data.scheduled.slice(0, 5)}
        predicted_delay_minutes={data.predicted_delay_minutes}
        accuracy={data.predicted_delay_accuracy}
      />
    </div>
  )
}
