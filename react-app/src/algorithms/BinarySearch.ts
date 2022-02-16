import Timer from "../helpers/Timer";
import IChartData from "../types/IChartData";

async function BinarySearch(data:IChartData, setData:(data:IChartData)=> void, delay:number){
    const array:number[] = Array.from(data.array);
    var low = 0;
    var high = array.length-1;
    
    while(low <= high) {
        var mid = Math.round(low +(high-low)/2);
        if(mid == data.targetIndex){
            const newData:IChartData = {
                array:array,
                currentIndex:mid,
                targetIndex:data.targetIndex
            }
            setData(newData);
            await Timer(delay);
            let position = mid+1;
            return alert("The item you are searching is located at "+position+ " position.")
        }

        if(mid < data.targetIndex){
            low = mid + 1;
        }else {
            high = mid - 1;
        }
        
        const newData:IChartData = {
            array:array,
            currentIndex:mid,
            targetIndex:data.targetIndex
        }
        setData(newData);
        await Timer(delay);
    }
}
export default BinarySearch