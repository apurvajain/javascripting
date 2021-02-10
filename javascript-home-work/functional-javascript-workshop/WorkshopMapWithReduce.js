module.exports = function arrayMap(arr, fn) {
    const newArray=[];
    arr.reduce(function (accumulator,currentValue,index){
        newArray.push(fn(currentValue,index));
    },0)
    return newArray;
}