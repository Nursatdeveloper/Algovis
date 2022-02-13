import Timer from "../Timer";
import ISortingData from "../types/ISortingData";

async function BubbleSort(data:ISortingData, setData:(data:ISortingData)=> void, timeout:number){
    var array = Array.from(data.array);
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - i; j++ ){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                let newData:ISortingData = {
                    array:array,
                    currentIndex:j,
                    changingIndex:j+1
                }
                setData(newData);
                await Timer(timeout)
            }
        }
    }
}

export default BubbleSort