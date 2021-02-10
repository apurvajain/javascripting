const numArray = [1, 2, 3, 4, 5];

function mapWithReduce(arr,fn){
    arr.reduce(function(accumulator,currentValue){
          accumulator.concat(fn(currentValue))
    },[])
}

const res = mapWithReduce(numArray,function (value) {
    //console.log(accumulator);
    return value
  });
  console.log(res);

  