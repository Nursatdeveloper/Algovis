import React, { useEffect, useRef, useState } from 'react'
import BubbleSort from '../algorithms/BubbleSort'
import InsertionSort from '../algorithms/InsertionSort'
import InitializeQuicksort from '../algorithms/Quicksort'
import SelectionSort from '../algorithms/SelectionSort'
import Chart from '../components/Chart'
import RightSidebar from '../components/RightSidebar'
import SortingAlgorithmList from '../data/SortingAlgorithmList'
import ISortingData from '../types/ISortingData'
import './Sort.css'

const Sort = () => {
    const [algorithm, setAlgorithm] = useState<string>('Bubble sort');
    const [range, setRange] = useState<number>(20);
    const [speed, setSpeed] = useState<number>(1);
    const [delay, setDelay] = useState<number>(300);
    const [columnWidth, setColumnWidth] = useState<number>(20)
    const [sortingData, setSortingData] = useState<ISortingData>({
        array:[],
        currentIndex:0,
        changingIndex:0
    })

    useEffect(() => {
        const randomData = getRangomData(range);
        setColumnWidth(100/range);
        setSortingData({
            array:randomData,
            currentIndex:0,
            changingIndex:0
        })
    }, [range])

    const handleSpeedChange = (increase:boolean) => {
        if(increase){
            if(speed < 4){
                setSpeed(speed + 1);
                setDelay(delay/speed);
            }
        }else{
            if(speed > 1){
                setSpeed(speed - 1);
                setDelay(delay/speed);
            }
        }
    }
    
    const getRangomData = (range:number) => {
        const randomData:number[] = [];
        for(let i = 0; i < range; i++){
            randomData[i] = Math.floor(Math.random() * (400 - 50)) + 50; 
        }
        return randomData;
    }

    const sortData = () => {
        if(algorithm == 'Bubble sort'){
            BubbleSort(sortingData, setSortingData, delay);
        }
        else if(algorithm == 'Selection sort'){
            SelectionSort(sortingData, setSortingData, delay);
        }
        else if(algorithm == 'Insertion sort'){
            InsertionSort(sortingData, setSortingData, delay);
        }
        else if(algorithm == 'Quicksort'){
            InitializeQuicksort(sortingData, setSortingData, delay);
        }
    }
    

  return (
    <div className='sort__container'>
        <div className='sort__header'>
            <div className='subheader__algorithm_wrapper'>
                <span className='subheader__text'>Algorithm:</span>
                <select className='subheader__select_option' onChange={(e => setAlgorithm(e.target.value))}>
                    {SortingAlgorithmList.map(algorithm => <option key={algorithm}>{algorithm}</option>)}       
                </select>
            </div>
            <div className="subheader__slide_container">
                <div className='slider_wrapper'>
                    <div className='subheader__text'>
                        <span>Range:</span>
                    </div>
                    <div className='slider_input'>
                        <input type="range" min="20" max="100" className="slider" value={range}
                        onInput={(e: React.ChangeEvent<HTMLInputElement>,):void => setRange(parseInt(e.target.value))}/>
                    </div>
                    <div className='slider_range_wrapper'>
                        <input type='text' className='slider_range' value={range} onChange={(e) => setRange(parseInt(e.target.value))}/>
                    </div>
                </div>
            </div>
            <div className='subheader__speed_container'>
                <div className='subheader__text'>
                    <span>Speed:</span>
                </div>
                <div className='speed_input_wrapper'>
                    <button className='speed_btn' onClick={() => handleSpeedChange(false)}>-</button>
                    <input type="text" className='speed_display'value={speed+"x"}/>
                    <button className='speed_btn' onClick={() => handleSpeedChange(true)}>+</button>
                </div>
            </div>
            <div className='subheader__btn_container'>
                <button className='subheader__sort_btn' onClick={sortData}>Sort</button>
            </div>
        </div>
        <div className='sort__body' id="myId">
            <div className='sort__chart_container'>
                <Chart data={sortingData} colWidth={columnWidth}/>
            </div>
            <div className='sort__algorithm_code'>
                {algorithm != '' ? <RightSidebar algorithmName={algorithm}/> : null}
            </div>
        </div>
    </div>
  )
}

export default Sort