import React from 'react'
import './style/HoverInfo.scss'
import SelectionItem from './SelectionItem.js'

export default function HoverInfo({ route }) {
  return <div className="HoverInfo">{route}</div>
}
