import React from 'react'
import './style/HelpTab.scss'

export default function HelpTab() {
  return (
    <div className="HelpTab">
      <label for="toggler" className="InfoSymbol">
        &#9432;
      </label>
      <input type="checkbox" id="toggler" />
      <div className="HelpTabContainer">
        <div className="RouteSelection">
          <h3>Side Navigation</h3>
          <p>
            The routes displayed are predicted by the algorithm to either be on
            time or delayd
          </p>
        </div>
        <div className="InfoTab">
          <h3>Info Tab</h3>
          <p>More information on selected route</p>
        </div>
      </div>
    </div>
  )
}
