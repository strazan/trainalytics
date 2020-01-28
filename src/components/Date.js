import React from 'react'
import './style/date-time.scss'
import moment from 'moment'

export default function Date () {
    return (
        <div className="text-normal text-color-primary">
           {moment().format('YYYY - MM - DD') }
        </div>
    )
}