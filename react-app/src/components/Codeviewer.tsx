import React, { FC } from 'react'
import Bubblesort from '../data/algorithm_codes/Bubblesort';
import Insertionsort from '../data/algorithm_codes/Insertionsort';
import Linearsearch from '../data/algorithm_codes/Linearsearch';
import Quicksort from '../data/algorithm_codes/Quicksort';
import Selectionsort from '../data/algorithm_codes/Selectionsort';
import './Codeviewer.css'

interface CodeviewerProps{
    algorithmName:string;
}


const Codeviewer:FC<CodeviewerProps> = ({algorithmName}) => {
  return (
    <div className='codeviewer__container'>
        <div className='codeviewer__header'>
            <div className='codeviewer__header_item'>
                <span>C#</span>
            </div>

        </div>
        <div className='codeviewer__body'>
            {algorithmName == 'Bubble sort' ? <Bubblesort /> : null}
            {algorithmName == 'Selection sort' ? <Selectionsort/> : null}
            {algorithmName == 'Insertion sort' ? <Insertionsort /> : null}
            {algorithmName == 'Quicksort' ? <Quicksort /> : null}
            {algorithmName == 'Linear search' ? <Linearsearch /> : null}
        </div>
    </div>
  )
}

export default Codeviewer