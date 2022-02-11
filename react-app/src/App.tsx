import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Quicksort from './algorithms/Quicksort';
import API_URL from './ApiUrl';
import './App.css';
import Chart from './components/Chart';
import Header from './components/Header';
import SortingParam from './types/SortingParam';


function App() {
  
  const [sortParams, setSortParams] = useState<SortingParam>({algorithm:'', range:0});
  const [startSort, setStartSort] = useState<boolean>(false);
  const [data, setData] = useState<number[]>([]);
  const apiUrl = API_URL;

  

  useEffect(()=>{
    if(sortParams.range != 0){
      axios.post(`${apiUrl}/api/data/get-random-data/${sortParams.range}`)
      .then((res) => {
        setData(res.data)
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
    if(sortParams.algorithm == 'Quicksort'){
      Quicksort(data, setData, 150)
      setStartSort(false);
    }
  }

  return (
    <div className="App">
      <Header startSorting={setStartSort} sortParam={setSortParams}/>
      <Chart data={data}/>
    </div>
  );
}

export default App;
