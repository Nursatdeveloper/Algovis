import React, { FC, useState } from 'react'
import './SubHeader.css'


interface SubHeaderProps {
    marginTop:number;
    setAlgorithmType:(type:string) => void;
    setRange:(range:number) => void;
    setStartSorting:(start:boolean) => void;
    setSpeedValue:(speed:number) => void;
}

const SubHeader:FC<SubHeaderProps> = ({
    marginTop, 
    setAlgorithmType, 
    setRange,
    setStartSorting,
    setSpeedValue,
    children
}) => {

    const [dataRange, setDataRange] = useState<number>(20);
    const [algorithm, setAlgorithm] = useState<string>('');
    const [speed, setSpeed] = useState<number>(1);

    function handleSortClick(){
        if(algorithm != '' && dataRange != 0){
            setStartSorting(true);
            setSpeedValue(speed)
        }
        
    }

    const handleRangeChange =  (e: React.ChangeEvent<HTMLInputElement>,):void => {
        setRange(parseInt(e.target.value))
        setDataRange(parseInt(e.target.value))
    }

    const handleAlgorithmChange = (value:string) => {
        setAlgorithm(value)
        setAlgorithmType(value);
        setRange(dataRange)
    }

    const handleSpeedChange = (increase:boolean) => {
        if(increase && speed < 4){
            setSpeed(speed+1);
            setSpeedValue(speed+1);
        }
        if(!increase && speed > 1){
            setSpeed(speed-1);
            setSpeedValue(speed-1);
        }
    }

  return (
    <div className='subheader__container' style={{marginTop:marginTop}}>
        <div className='subheader__algorithm_wrapper'>
            <span className='subheader__text'>Algorithm:</span>
            <select className='subheader__select_option' onChange={(e)=> handleAlgorithmChange(e.target.value)}>
                <option>Choose</option>
                <option>Bubble sort</option>
                <option>Selection sort</option>
                <option>Insertion sort</option>
                <option>Quicksort</option>          
            </select>
        </div>
        <div className="subheader__slide_container">
            <div className='slider_wrapper'>
                <div className='subheader__text'>
                    <span>Range:</span>
                </div>
                <div className='slider_input'>
                    <input type="range" min="20" max="100" value={dataRange} className="slider" 
                        onInput={(e: React.ChangeEvent<HTMLInputElement>,):void => handleRangeChange(e)}/>
                </div>
                <div className='slider_range_wrapper'>
                    <input type='text' className='slider_range' value={dataRange} onChange={(e)=> handleRangeChange(e)}/>
                </div>
            </div>
        </div>
        <div className='subheader__speed_container'>
            <div className='subheader__text'>
                <span>Speed:</span>
            </div>
            <div className='speed_input_wrapper'>
                <button className='speed_btn' onClick={()=> handleSpeedChange(false)}>-</button>
                <input type="text" className='speed_display'value={speed+"x"}/>
                <button className='speed_btn' onClick={()=> handleSpeedChange(true)}>+</button>
            </div>
        </div>

        {children}
        <div className='subheader__btn_container'>
            <button className='subheader__sort_btn' onClick={handleSortClick} >Sort</button>
        </div>
    </div>
  )
}

export default SubHeader