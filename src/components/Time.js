import React from 'react'
import './style/date-time.scss'
import Clock from 'react-live-clock';



export default function Time () {
    return (
        <div className="text-normal text-color-primary">
            <Clock format={'HH : mm : ss'} ticking={true} timezone={'LTS'} />
              
        </div>
    )
}

