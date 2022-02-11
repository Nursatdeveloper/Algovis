import React, { FC, useState } from 'react'
import './SubHeader.css'

interface sortData{

}

interface SubHeaderProps {
    show:boolean;
    marginTop:number;
}

const SubHeader:FC<SubHeaderProps> = ({show, marginTop}) => {
    const [dateRange, setDateRange] = useState<number>(10);
    const [algorithm, setAlgorigthm] = useState<string>('');

  return (
    <div className='subheader__container' style={{marginTop:marginTop}}>
        <div className='subheader__algorithm_wrapper'>
            <span className='subheader__text'>Algorithm:</span>
            <select className='subheader__select_option' >
                <option>Choose</option>
                <option>Quicksort</option>
                <option>Bubblesort</option>
            </select>
        </div>
        <div className="subheader__slide_container">
            <div className='slider_wrapper'>
                <div className='subheader__text'>
                    <span>Range:</span>
                </div>
                <div className='slider_input'>
                    <input type="range" min="10" max="100" value={dateRange} className="slider" 
                        onInput={(e: React.ChangeEvent<HTMLInputElement>,):void => setDateRange(parseInt(e.target.value))}/>
                </div>
                <div className='slider_range_wrapper'>
                    <input type='text' className='slider_range' value={dateRange}/>
                </div>
            </div>
        </div>
        <div className='subheader__btn_container'>
            <button >Sort</button>
        </div>
    </div>
  )
}

export default SubHeader