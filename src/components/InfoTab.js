import React from 'react'
import Log from './Log'
import './style/InfoTab.scss'

export default function InfoTab({ activeDelay }) {
  console.log(activeDelay)
  return (
    <div
      className={}
      style={{ width: '22rem', height: '100vh', backgroundColor: '#f2f2f2' }}
    >
      <h1 className="text-color-primary text-header">{}</h1>
      <Log />
    </div>
  )
}
