import React, { FC } from 'react'
import ISortingAlgorithm from '../types/ISortingAlgorithm'
import Codeviewer from './Codeviewer'
import './RightSidebar.css'

interface RightSidebarProps{
  algorithmName:string;
}

const algorithmArray:ISortingAlgorithm[] = [
  {name:"Bubble sort", timeComplexity:"O(n^2)"},
  {name:"Selection sort", timeComplexity:"O(n^2)"},
  {name:"Insertion sort", timeComplexity:"O(n^2)"},
  {name:"Quicksort", timeComplexity:"O(n*log(n))"},
  {name:"Linear search", timeComplexity:"O(n)"}
]


const RightSidebar:FC<RightSidebarProps> = ({algorithmName}) => {

  const algorithm:ISortingAlgorithm[] = algorithmArray.filter(item => item.name == algorithmName)

  return (

    <div className='rightsidebar__container'>
         
      <div className='rightsidebar__header'>
        {algorithm[0].name}
      </div>
      <div className='rightsidebar__row'>
        <span>Time complexity:</span>
        <span>{algorithm[0].timeComplexity}</span>
      </div>
      <div className='rightsidebar__row'>
        <Codeviewer algorithmName={algorithmName}/>
      </div>
      
    </div>
  )
}

export default RightSidebar