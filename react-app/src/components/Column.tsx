import React, { FC } from 'react'
import './Chart.css'

interface ColumnProps{
    key:number;
    height:number;
}

const Column:FC<ColumnProps> = ({key, height}) => {
  return (
    <div className='column' key={key} style={{height:height}}>

    </div>
  )
}

export default Column