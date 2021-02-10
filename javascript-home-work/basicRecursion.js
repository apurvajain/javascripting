
index =  0;
function reduce(arr, fn, initial) {
    if (index >= arr.length) {
        return initial;
    }
    if (!initial) {
        initial = arr[index];
        index++;
    }
    initial = fn(initial, arr[index], index, arr);
    index++;
    return reduce(arr, fn, initial);
}


  module.exports = reduce;