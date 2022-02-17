import React from 'react'
import './Documentation.css'

const Documentation = () => {
  return (
    <div className='documentation__container'>
        <div className='documentation__row documentation__header'>
            <span>Documentation</span>
        </div>

        <div className='documentation__row'>
            <img className='architecture_img' src={require('../img/algovis_architecture.jpg')} />
        </div>

    </div>
  )
}

export default Documentation