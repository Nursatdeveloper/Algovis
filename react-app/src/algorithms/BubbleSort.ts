import Timer from "../helpers/Timer";
import IChartData from "../types/IChartData";

async function BubbleSort(data:IChartData, setData:(data:IChartData)=> void, timeout:number){
    var array = Array.from(data.array);
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - i; j++ ){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                let newData:IChartData = {
                    array:array,
                    currentIndex:j,
                    targetIndex:j+1
                }
                setData(newData);
                await Timer(timeout)
            }
        }
    }
}

export default BubbleSort