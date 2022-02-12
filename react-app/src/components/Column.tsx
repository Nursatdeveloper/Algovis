import React, { FC, useEffect, useState } from 'react'
import './Chart.css'

interface ColumnProps{
    id:number;
    height:number;
    current:number;
    next:number;
}

const Column:FC<ColumnProps> = ({id, height, current, next}) => {
  const [bgColor, setBgColor] = useState('')
  
  /*if(key == current || key == next){
    setBgColor('red');
    console.log('red');
  }else{
    setBgColor('green')
    console.log('green')
  }*/
  return (
    <div className='column' key={id} style={{height:height, backgroundColor:bgColor}}></div>
    
  )
}

export default Column