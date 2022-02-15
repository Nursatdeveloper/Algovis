
import Timer from "../helpers/Timer";
import IChartData from "../types/IChartData";

var delay:number = 0;

function InitializeQuicksort(data:IChartData, setData:(data:IChartData)=> void, timeout:number){
    var array:number[] = Array.from(data.array);
    delay = timeout
    Quicksort(array, 0, array.length - 1, setData)
}
async function Quicksort(arr:number[], low:number, high:number, setData:(data:IChartData)=> void)
{
    if(low < high) 
    {
        let pi = await Partition(arr, low, high, setData);
        Quicksort(arr, low, pi - 1, setData);
        Quicksort(arr, pi + 1, high, setData);
    }
}
async function Partition(arr:number[], low:number, high:number, setData:(data:IChartData)=> void)
{
    let pivot = arr[high];
    let i = (low - 1);
    for(let j = low; j <= high - 1; j++)
    {
        if(arr[j] < pivot){
            i++;
            await swap(arr, i, j, setData);
        }
    }
    await swap(arr, i + 1, high, setData);
    return i+1;
}
async function swap(arr:number[], i:number, j:number, setData:(data:IChartData)=> void){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    var newData:IChartData = {
        array:arr,
        currentIndex:i,
        targetIndex:j,
    }
    setData(newData);
    console.log(newData);
    console.log(delay)
    await Timer(delay);
}
export default InitializeQuicksort