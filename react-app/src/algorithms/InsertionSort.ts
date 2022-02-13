import Timer from "../Timer";
import ISortingData from "../types/ISortingData";

async function InsertionSort(data: ISortingData, setData:(data:ISortingData)=> void, timeout:number){
    var array = Array.from(data.array);
    for(let i = 1; i < array.length; i++){
        if(array[i] < array[i - 1]){
            for(let j = i; j > 0; j--){
                if(array[j] < array[j - 1]){
                    var temp = array[j];
                    array[j] = array[j - 1];
                    array[j - 1] = temp;
                    var newData:ISortingData = {
                        array: array,
                        currentIndex: j,
                        changingIndex: j - 1
                    }
                    setData(newData);
                    await Timer(timeout);
                }
            }
        }
    }
}

export default InsertionSort