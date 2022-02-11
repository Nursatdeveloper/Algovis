import React, { FC } from 'react'
import './Chart.css'
import Column from './Column'

interface ChartProps{
    data:number[];
}

const Chart:FC<ChartProps> = ({data}) => {
  return (
    <div className='chart__container'>
        {data.map((item, i) => <Column key={++i} height={item}/>)}
    </div>
  )
}

export default Chart