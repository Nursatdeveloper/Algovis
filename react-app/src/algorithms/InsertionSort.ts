import Timer from "../helpers/Timer";
import IChartData from "../types/IChartData";
import ISortingData from "../types/IChartData";

async function InsertionSort(data: IChartData, setData:(data:IChartData)=> void, timeout:number){
    var array = Array.from(data.array);
    for(let i = 1; i < array.length; i++){
        if(array[i] < array[i - 1]){
            for(let j = i; j > 0; j--){
                if(array[j] < array[j - 1]){
                    var temp = array[j];
                    array[j] = array[j - 1];
                    array[j - 1] = temp;
                    var newData:IChartData = {
                        array: array,
                        currentIndex: j,
                        targetIndex: j - 1
                    }
                    setData(newData);
                    await Timer(timeout);
                }
            }
        }
    }
}

export default InsertionSort