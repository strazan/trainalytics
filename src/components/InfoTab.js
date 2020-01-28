import React, { useContext } from 'react'
import { InfoTabContext } from './InfoTabContext'
import Log from './Log'
import './style/InfoTab.scss'

export default function InfoTab({ delays }) {
  const { activedelay, setclickdelay, index, setIndex } = useContext(
    InfoTabContext
  )

  const station = () => Object.keys(delays.delay.station)[index]

  return (
    <div
      className={activedelay ? 'active' : 'hidden'}
      style={{ width: '22rem', height: '100vh', backgroundColor: '#f2f2f2' }}
    >
      <h1 className="text-color-primary text-header">{station}</h1>
      <Log />
    </div>
  )
}
