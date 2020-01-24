import React from 'react'
import './style/SideNav.scss'
import RouteSelection from './RouteSelection'

export default function SideNav({ delays }) {
  return (
    <div className="SideNav">
      <div className="arrow">
        <h1>Trainalytics</h1>
      </div>
      <RouteSelection delays={delays} />
    </div>
  )
}
