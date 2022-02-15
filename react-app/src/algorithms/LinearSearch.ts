import Timer from "../helpers/Timer";
import IChartData from "../types/IChartData";

async function LinearSearch(data:IChartData, setData:(data:IChartData)=> void, delay:number){
    const array:number[] = Array.from(data.array);
    for(let i = 0; i < array.length; i++ ){
        if(i == data.targetIndex){
            let position = i+1;
            return alert("The item you are searching is located at "+position+ " position.")
        }
        setData({
            array:array,
            currentIndex:i+1,
            targetIndex:data.targetIndex
        })
        await Timer(delay);
    }
}

export default LinearSearch