import React, { useState, useEffect } from 'react'
import './style/Log.scss'
import LogItem from './LogItem'

export default function Log({ activeDelay }) {
  const [logItem, setLogItem] = useState()

  useEffect(() => {
    const data = []
    const dataIndex = 6
    const date = new Date()
    let totalMin = 0

    const realTime = () =>
      date.getHours() +
      ':' +
      (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())

    const newTime = () => {
      totalMin += parseInt(Math.random() * 10)
      date.setTime(date.getTime() - totalMin * 60 * 1000)
      return (
        date.getHours() +
        ':' +
        (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
      )
    }

    const newAccurecy = () =>
      Math.ceil((Math.random() * (100 - 50) + 50) / 10) * 10 + '%'

    const logGenerator = () => {
      if (activeDelay) {
        for (let i = 0; i < dataIndex; i++) {
          if (i === 0) {
            const newData = {
              index: i,
              logTime: realTime(),
              estArrival: activeDelay.scheduled.slice(0, 5),
              calDelay: activeDelay.predicted_delay_minutes,
              accuracy: activeDelay.predicted_delay_accuracy
            }
            data.push(newData)
            console.log(newData.accuracy)
          } else {
            const newData = {
              index: i,
              logTime: newTime(),
              estArrival: activeDelay.scheduled.slice(0, 5),
              calDelay: parseInt(Math.random() * 10),
              accuracy: newAccurecy()
            }
            data.push(newData)
            console.log(newData.accuracy)
          }
        }
      }
    }

    function loadData() {
      const item = data.map(data => {
        return (
          <LogItem
            key={data.index}
            logTime={data.logTime}
            estArrival={data.estArrival}
            calDelay={data.calDelay}
            accuracy={data.accuracy}
          />
        )
      })
      setLogItem(item)
    }
    logGenerator()
    loadData()
  }, [activeDelay])

  return (
    <div className="log">
      <div className="log-labels">
        <h6>Log time</h6>
        <h6>Estimates arrival</h6>
        <h6>Calculated Delay</h6>
        <h6>Accuracy</h6>
      </div>
      {logItem}
      <div className="graph-placeholder"></div>
    </div>
  )
}
