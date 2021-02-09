const array = [1, 2, 3, 4, 5];

function reducee(arr, fn, initialValue) {
    if (arr.length === 0)
        return initialValue;
    initialValue = fn(initialValue, arr[0]);
    return reducee(arr.slice(1), fn, initialValue);

}

const result = reducee(array, function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 11);

console.log(result);