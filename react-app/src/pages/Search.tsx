import React, { useEffect, useState } from 'react'
import LinearSearch from '../algorithms/LinearSearch';
import Chart from '../components/Chart';
import RightSidebar from '../components/RightSidebar';
import SearchingAlgorithmList from '../data/SearchingAlgorithmList'
import GetRandomData from '../helpers/GetRandomData';
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
        const randomData = GetRandomData(range);
        setColumnWidth(100/range);
        setSearchingData({
            array:randomData,
            currentIndex:0,
            targetIndex:0
        })
    }, [range])



    const searchData = () => {
        if(algorithm == 'Linear search'){
            console.log(searchItem)
            setSearchingData({...searchingData, targetIndex:searchItem})
            LinearSearch(searchingData, setSearchingData, 300)
            
        }
    }

  return (
    <div className='search__container'>
        <div className='search__header'>
            <div className='header__algorithm_wrapper'>
                <span className='header__text'>Algorithm:</span>
                <select className='subheader__select_option' onChange={(e => setAlgorithm(e.target.value))}>
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

            </div>
            <div className='search__codeviewer'>
                <RightSidebar algorithmName={algorithm}/>
            </div>
        </div>
    </div>
  )
}

export default Search