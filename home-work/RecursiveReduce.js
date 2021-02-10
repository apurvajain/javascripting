const numArr = [5, 7, 1, 8, 4];

function recursiveReduce (numArr,func,initialValue){
    if (numArr.length === 0)
        return initialValue
    initialValue = func(initialValue,numArr[0])
    return recursiveReduce(numArr.slice(1),func,initialValue)
}

const sum = recursiveReduce(numArr,function (accumulator, currentValue) {
  return accumulator + currentValue;
},2);
console.log(sum);