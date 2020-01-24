import React from 'react'
import Log from './Log'
import './style/InfoTab.scss'

export default function InfoTab() {
  return (
    <div
      style={{ width: '22rem', height: '100vh', backgroundColor: '#f2f2f2' }}
    >
      <Log />
      <p className="text-header text-color-primary">Header</p>
      <p className="text-normal text-color-primary">Normal</p>
      <p className="text-small text-color-gray">This is a paragraph</p>
    </div>
  )
}
