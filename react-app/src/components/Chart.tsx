import React, { FC, useEffect, useState } from 'react'
import ISortingData from '../types/ISortingData'
import './Chart.css'
import Column from './Column'

interface ChartProps{
    data:ISortingData;
}

const Chart:FC<ChartProps> = ({data}) => {
  const [columnBgColor, setColumnBgColor] = useState<string>('green')
  const [index, setIndex] = useState<number>(-1);
  
  function getBgColor(index:number){
    if(index == data.currentIndex || index == data.changingIndex){
      return 'red'
    }else{
      return 'green'
    }
  }

  return (
    <div className='chart__container'>
      <div className='chart__header'>
        
      </div>
      <div className='chart__body'>
        {data.array.map(function(height, i) {
          var color:string = getBgColor(i)
          return  (
            <div className='column' key={i++} style={{height:height, backgroundColor:color}}>
            </div>
          )

        })}
      </div>
        
    </div>
  )
}

export default Chart