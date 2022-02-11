import React, { FC, useState } from 'react'
import './SubHeader.css'

interface ISortParam{
    algoType:string;
    range:number;
}

interface SubHeaderProps {
    show:boolean;
    marginTop:number;
    setAlgorithmType:(type:string) => void;
    setRange:(range:number) => void;
}

const SubHeader:FC<SubHeaderProps> = ({show, marginTop, setAlgorithmType, setRange}) => {
    const [dataRange, setDataRange] = useState<number>(10);
    const [algorithm, setAlgorithm] = useState<string>('undefined');

    function handleSortClick(){
        setRange(dataRange);
        setAlgorithmType(algorithm);
        console.log(dataRange);
        console.log(algorithm);
    }

  return (
    <div className='subheader__container' style={{marginTop:marginTop}}>
        <div className='subheader__algorithm_wrapper'>
            <span className='subheader__text'>Algorithm:</span>
            <select className='subheader__select_option' onChange={(e)=> setAlgorithm(e.target.value)}>
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
                    <input type="range" min="10" max="100" value={dataRange} className="slider" 
                        onInput={(e: React.ChangeEvent<HTMLInputElement>,):void => setDataRange(parseInt(e.target.value))}/>
                </div>
                <div className='slider_range_wrapper'>
                    <input type='text' className='slider_range' value={dataRange} onChange={(e)=> setDataRange(parseInt(e.target.value))}/>
                </div>
            </div>
        </div>
        <div className='subheader__btn_container'>
            <button className='subheader__sort_btn' onClick={handleSortClick} >Sort</button>
        </div>
    </div>
  )
}

export default SubHeader