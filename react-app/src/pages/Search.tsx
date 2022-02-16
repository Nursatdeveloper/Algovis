import React, { useEffect, useState } from 'react'
import BinarySearch from '../algorithms/BinarySearch';
import LinearSearch from '../algorithms/LinearSearch';
import Chart from '../components/Chart';
import RightSidebar from '../components/RightSidebar';
import SearchingAlgorithmList from '../data/SearchingAlgorithmList'
import GetRandomData from '../helpers/GetRandomData';
import Sort from '../helpers/Sort';
import IChartData from '../types/IChartData';
import './Search.css'

const Search = () => {

    const [algorithm, setAlgorithm] = useState<string>('Linear search');
    const [range, setRange] = useState<number>(20);
    const [columnWidth, setColumnWidth] = useState<number>(20);
    const [searchingData, setSearchingData] = useState<IChartData>({
        array: [],
        currentIndex:0,
        targetIndex:0
    });
    const [searchItem, setSearchItem] = useState<number>(-1);

    useEffect(()=> {
        setSearchingData({...searchingData, targetIndex: searchItem})
    }, [searchItem])

    useEffect(() => {
        setSearchItem(-1);
        var randomData = GetRandomData(range);
        if(algorithm == 'Binary search'){
            randomData = Sort(randomData)
        }
        setColumnWidth(100/range);
        setSearchingData({
            array:randomData,
            currentIndex:0,
            targetIndex:0
        })
    }, [range])



    const searchData = () => {
        if(searchItem == -1){
            return alert("Please click one of the bars!")
        }
        if(algorithm == 'Linear search'){
            setSearchingData({...searchingData, targetIndex:searchItem})
            LinearSearch(searchingData, setSearchingData, 300)  
        }
        else{
            setSearchingData({...searchingData, targetIndex:searchItem})
            BinarySearch(searchingData, setSearchingData, 300)  
        }
    }

    const handleAlgorithmChange = (algorithm:string) => {
        setAlgorithm(algorithm);
        if(algorithm == 'Binary search'){
            const sortedArray = Sort(searchingData.array)
            setSearchingData({
                ...searchingData,
                array: sortedArray
            })
        }
    }
    

  return (
    <div className='search__container'>
        <div className='search__header'>
            <div className='header__algorithm_wrapper'>
                <span className='header__text'>Algorithm:</span>
                <select className='subheader__select_option' onChange={(e => handleAlgorithmChange(e.target.value))}>
                    {SearchingAlgorithmList.map(algorithm => <option key={algorithm}>{algorithm}</option>)}       
                </select>
            </div>
            <div className="subheader__slide_container">
                <div className='slider_wrapper'>
                    <div className='subheader__text'>
                        <span>Range:</span>
                    </div>
                    <div className='slider_input'>
                        <input type="range" min="20" max="40" className="slider" value={range}
                        onInput={(e: React.ChangeEvent<HTMLInputElement>,):void => setRange(parseInt(e.target.value))}/>
                    </div>
                    <div className='slider_range_wrapper'>
                        <input type='text' className='slider_range' value={range} onChange={(e) => setRange(parseInt(e.target.value))}/>
                    </div>
                </div>
            </div>
            <div className='header__btn_container'>
                <button className='header__search_btn' onClick={searchData}>Search</button>
            </div>
        </div>
        <div className='search__body'>
            <div className='search__chart'>
                <Chart 
                    data={searchingData} 
                    colWidth={columnWidth} 
                    target="Searching" 
                    setItemIndex={setSearchItem} 
                    itemIndex={searchItem}
                />
                <div className='search__message'>
                    <span>Click one of the bars above to label searching item!</span>
                </div>
            </div>
            <div className='search__codeviewer'>
                <RightSidebar algorithmName={algorithm}/>
            </div>
        </div>
    </div>
  )
}

export default Search