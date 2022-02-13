import React, { FC, useEffect, useState } from 'react'
import ISortingData from '../types/ISortingData'
import './Chart.css'
import Column from './Column'

interface ChartProps{
    data:ISortingData;
    colWidth:number;
}

const Chart:FC<ChartProps> = ({data, colWidth}) => {
  
  function getBgColor(index:number){
    if(index == data.currentIndex){
      return '#ff3300'
    }
    else if (index == data.changingIndex){
      return '#0099ff'
    }

    else{
      return '#24306E';
    }
  }

  return (
    <div className='chart__container'>
      <div className='chart__header'>
        <div className='color_definition'>
          <div className='darkblue_square'>

          </div>
          <span>Sample data</span>
        </div>
        <div className='color_definition'>
          <div className='red_square'>

          </div>
          <span>Current item</span>
        </div>
        <div className='color_definition'>
          <div className='blue_square'>

          </div>
          <span>Changing item</span>
        </div>
      </div>
      <div className='chart__body'>
        {data.array.map(function(height, i) {
          var color:string = getBgColor(i)
          return  (
            <Column key={i++} height={height} bgColor={color} colWidth={colWidth} />
          )

        })}
      </div>
        
    </div>
  )
}

export default Chart