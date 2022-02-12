import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Quicksort from './algorithms/Quicksort';
import SelectionSort from './algorithms/SelectionSort';
import API_URL from './ApiUrl';
import './App.css';
import Chart from './components/Chart';
import Header from './components/Header';
import ISortingData from './types/ISortingData';
import SortingParam from './types/SortingParam';



function App() {
  
  const [sortParams, setSortParams] = useState<SortingParam>({algorithm:'', range:0, speed:1});
  const [startSort, setStartSort] = useState<boolean>(false);
  const [data, setData] = useState<ISortingData>({
    array:[],
    currentIndex:0,
    changingIndex:0
  });
  const [highlightIndexes, setHighlightIndexes] = useState<number[]>([]);
  const apiUrl = API_URL;

  useEffect(()=>{
    if(sortParams.range != 0){
      axios.post(`${apiUrl}/api/data/get-random-data/${sortParams.range}`)
      .then((res) => {
        setData({
          array:res.data,
          currentIndex:0,
          changingIndex:0
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
    let timeout = 300/sortParams.speed
    if(sortParams.algorithm == 'Quicksort'){
      //Quicksort(data, setData, timeout)
      setStartSort(false);
    }
    else if (sortParams.algorithm == 'Selection sort'){
      SelectionSort(data, setData, timeout)
      setStartSort(false);
    }
  }



  return (
    <div className="App">
      <Header startSorting={setStartSort} sortParam={setSortParams}/>
      {sortParams.range != 0 ? 
        <Chart 
          data={data}
        /> :null}
    </div>
  );
}

export default App;
