import Timer from "../helpers/Timer";
import IChartData from "../types/IChartData";


async function SelectionSort(
    data:IChartData, 
    setData:(data:IChartData)=> void, 
    timeout:number)

{
    let array:number[] = Array.from(data.array);
    for(let i:number = 0; i < array.length; i++){
        var minIndex:number = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[minIndex] > array[j]){
                minIndex = j;
            }
        }
        
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        let newData:IChartData = {
            array:[...array],
            currentIndex:i,
            targetIndex:minIndex
        }
        setData(newData);
        await Timer(timeout);
    }
}

export default SelectionSort