const GetRandomData = (range:number) => {
    const randomData:number[] = [];
    for(let i = 0; i < range; i++){
        randomData[i] = Math.floor(Math.random() * (400 - 50)) + 50; 
    }
    return randomData;
}

export default GetRandomData