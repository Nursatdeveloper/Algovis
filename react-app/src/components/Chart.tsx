import React, { FC, useEffect, useState } from 'react'
import IChartData from '../types/IChartData';
import './Chart.css'
import Column from './Column'

interface ChartProps{
    data:IChartData;
    colWidth?:number;
    target:string;
    itemIndex?:number;
    setItemIndex:(index:number)=> void
}

const Chart:FC<ChartProps> = ({data, colWidth, target, setItemIndex, itemIndex}) => {
  
  function getBgColor(index:number){
    if(index == data.currentIndex){
      return '#ff3300'
    }
    else if (index == data.targetIndex){
      return '#0099ff'
    }

    return '#24306E';
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
          <span>{target} item</span>
        </div>
      </div>
      <div className='chart__body'>
        {target == 'Changing' ?  
          data.array.map(function(height, i) {
            var color:string = getBgColor(i)
            console.log(color);
            return  (
              <Column key={i++} index={i++} height={height} bgColor={color} colWidth={colWidth} onClick={() => null}/>
            )
          }) 
        : 
          data.array.map(function(height, i) {
            var color:string = getBgColor(i)
            return  (
              <Column key={i++} index={i++} height={height} bgColor={color} colWidth={colWidth} onClick={setItemIndex} clickedItemIndex={itemIndex}/>
            )
          }) 
        }
      </div>
        
    </div>
  )
}

export default Chart