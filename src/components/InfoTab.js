import React from 'react'
import Log from './Log'
import ReactClock from 'react-live-clock'
import './style/InfoTab.scss'

export default function InfoTab({ activeDelay }) {
  let delayColor
  if (activeDelay) {
    switch (activeDelay.predicted_delay_accuracy) {
      case '100%':
        delayColor = 'hundred-color text-normal'
        break
      case '80%':
        delayColor = 'eighty-color text-normal'
        break
      case '60%':
        delayColor = 'sixty-color text-normal'
        break
      default:
        delayColor = 'text-color-primary text-normal'
    }
  }

  return (
    <div
      className={
        activeDelay
          ? 'active infoDiv-shadow infoTab'
          : 'hidden infoDiv-shadow infoTab'
      }
      style={{ width: '22rem', height: '100vh', backgroundColor: '#f2f2f2' }}
    >
      <h1 className="station text-color-primary text-header text-align-center top-margin-40">
        {activeDelay ? activeDelay.station : 'station'}
      </h1>
      <hr></hr>
      <div className="infoDiv infoDiv-shadow ">
        <div className="flex-row ">
          <p className="text-normal text-color-gray vertical-align">
            <ReactClock format={'HH : mm'} ticking={true} />
          </p>
        </div>
        <div className="flex-row">
          <p className="text-color-primary text-normal">Scheduled arrival</p>
          <p className="text-color-primary text-normal">Calculated delay</p>
          <p className="text-color-primary text-normal">Accuracy</p>
        </div>
        <div className="flex-row">
          <p className="text-color-primary text-normal">
            {activeDelay ? activeDelay.scheduled.slice(0, 5) : 'time'}
          </p>
          <p className="text-color-primary text-normal">
            {activeDelay ? activeDelay.predicted_delay_minutes : 'minutes'}
          </p>
          <p className={delayColor}>
            {activeDelay ? activeDelay.predicted_delay_accuracy : 'procent'}
          </p>
        </div>
      </div>
      <Log activeDelay={activeDelay} />
    </div>
  )
}
