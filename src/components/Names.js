import React from 'react'
import './Names.css'
export default function Names(props) {
  return (
    <div>
        <p className='names'>{props.name}</p>
    </div>
  )
}
