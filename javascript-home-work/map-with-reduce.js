//implementing Array.protoype.map() using Array.prototype.reduce()
const array= [1, 2, 3, 4, 5, 6]
const mapArray= mapWithReduce(array, function(curVal){
    return curVal*2;
})
function mapWithReduce(array,fn){
    const arr=[];
    array.reduce(function(accumulator,currentValue){
        arr.push(fn(currentValue));
    }, 0)
    return arr;
}
console.log(mapArray);