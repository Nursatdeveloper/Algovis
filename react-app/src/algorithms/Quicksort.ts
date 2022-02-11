
const timer = (ms:number) => {
    return new Promise(res => setTimeout(res, ms));
}
async function Quicksort(data:number[], setData:(data:number[])=>void, timeout:number){
    let array:number[] = Array.from(data);
    for (var i = 0; i < array.length; i++) {
        var number = array[i];
        var index = 0;
        for (var j = i; j < array.length; j++)
        {
            if (array[j] < number)
            {
                number = array[j];
                index = j;
            }
        }
        if (number != array[i])
        {
            var temp = array[i];
            array[i] = array[index];
            array[index] = temp;
            setData([...array])
            await timer(timeout);
        } 
    }
}

export default Quicksort