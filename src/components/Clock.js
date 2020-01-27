import React from 'react'
import './style/clock.scss'
import Date from './Date'
import Time from './Time'



export default function Clock() {

  return (
    
    <div className= "clock">
        <Date />
        <hr></hr>
        <Time />
   
    </div>
  );
}











    