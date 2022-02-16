function Sort(array:number[]){
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
    }
    return array;
}
export default Sort