function mapWithReduce(array,func){
    const newArray=[];
    array.reduce(function (accumulator,currentValue,index){
        newArray.push(func(currentValue,index));
    },0)
    return newArray;
}

const array=[1,2,3,4,5,6];

const mappedArray=mapWithReduce(array,function (currentValue,index){
    return currentValue*index;
})

console.log(mappedArray);