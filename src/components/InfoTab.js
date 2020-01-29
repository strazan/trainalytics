import React from 'react'
import Log from './Log'
import Clock from './Clock'
import './style/InfoTab.scss'

export default function InfoTab({ activeDelay }) {
  console.log(activeDelay)
  return (
    <div
      className={activeDelay ? 'active' : 'hidden'}
      style={{ width: '22rem', height: '100vh', backgroundColor: '#f2f2f2' }}
    >
      <h1 className="text-color-primary text-header text-align-center top-margin-40">
        {activeDelay ? activeDelay.station : 'station'}
      </h1>
      <hr></hr>
      <div className="infoDiv">
        <div className="flex-row">
          <p className="text-normal text-color-gray">
            <ReactClock format={'HH : mm'} ticking={true} />
          </p>
        </div>
        <div className="flex-row">
          <p className="text-color-gray text-normal">Scheduled arrival</p>
          <p className="text-color-gray text-normal">Calculated delay</p>
          <p className="text-color-gray text-normal">Accuracy</p>
        </div>
        <div className="flex-row">
          <p className="text-color-gray text-normal">
            {activeDelay ? activeDelay.scheduled.slice(0, 5) : 'time'}
          </p>
          <p className="text-color-gray text-normal">
            {activeDelay ? activeDelay.predicted_delay_minutes : 'minutes'}
          </p>
          <p className="text-color-gray text-normal">
            {activeDelay ? activeDelay.predicted_delay_accuracy : 'procent'}
          </p>
        </div>
      </div>
      <Log />
    </div>
  )
}
