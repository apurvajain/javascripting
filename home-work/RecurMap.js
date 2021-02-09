function mapp(arr, out, len) {
    if (len === arr.length)
        return out;
    out.push(arr[len] * 2);
    mapp(arr, out, len+1);
}
const numbers = [1, 2, 3, 4, 5, 6];
var out = [];
mapp(numbers, out, 0)
console.log(numbers);