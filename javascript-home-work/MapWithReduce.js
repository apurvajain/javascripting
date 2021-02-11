var nums = [1,2,3,4,5]

function map(arr, fn) 
{
    newarr=[]
    newarr=arr.reduce(function(accumulator,currentValue)
    {
    return accumulator.concat(fn(currentValue));

    },[arr[0]]);
    return newarr;
}

// `map` is your exported function
var output = map(nums, function double(item) {
  return item * 2
})


console.log(output) 