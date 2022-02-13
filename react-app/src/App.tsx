import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BubbleSort from './algorithms/BubbleSort';
import InsertionSort from './algorithms/InsertionSort';
import InitializeQuicksort from './algorithms/Quicksort';
import SelectionSort from './algorithms/SelectionSort';
import API_URL from './ApiUrl';
import './App.css';
import Chart from './components/Chart';
import Header from './components/Header';
import RightSidebar from './components/RightSidebar';
import ISortingData from './types/ISortingData';
import SortingParam from './types/ISortingParam';



function App() {
  
  const [sortParams, setSortParams] = useState<SortingParam>({algorithm:'', range:0, speed:1});
  const [startSort, setStartSort] = useState<boolean>(false);
  const [data, setData] = useState<ISortingData>({
    array:[],
    currentIndex:0,
    changingIndex:0
  });
  const [colWidth, setColWidth] = useState<number>(10);
  const apiUrl = API_URL;

  useEffect(()=>{
    if(sortParams.range != 0){
      axios.post(`${apiUrl}/api/data/get-random-data/${sortParams.range}`)
      .then((res) => {
        if(sortParams.range*10 < 450){
          setColWidth(Math.round(450/sortParams.range))
        }
        setData({
          array:res.data,
          currentIndex:0,
          changingIndex:0,
        })
        if(startSort){
          defineAlgorithm()
        }
      })
      .catch((err) => {
          console.log("Server respondend with error: ", err);
      })

    }
   
  }, [sortParams, startSort])

  function defineAlgorithm(){
    console.log(sortParams.algorithm)
    let timeout = 300/sortParams.speed
    if(sortParams.algorithm == 'Bubble sort'){
      BubbleSort(data, setData, timeout)
      setStartSort(false);
    }
    else if (sortParams.algorithm == 'Selection sort'){
      SelectionSort(data, setData, timeout)
      setStartSort(false);
    }
    else if (sortParams.algorithm == 'Insertion sort'){
      InsertionSort(data, setData, timeout)
      setStartSort(false);
    }
    else if (sortParams.algorithm == 'Quicksort'){
      InitializeQuicksort(data, setData, timeout)
      setStartSort(false);
    }
  }



  return (
    <div className="App">
      <Header startSorting={setStartSort} sortParam={setSortParams}/>
      <div className='main_container'>
        {sortParams.range != 0 ? 
          <Chart 
            data={data}
            colWidth={colWidth}
          /> :null}

        {sortParams.algorithm != '' ?
         <RightSidebar 
          algorithmName={sortParams.algorithm}
         /> : null }
        
      </div>
    </div>
  );
}

export default App;
