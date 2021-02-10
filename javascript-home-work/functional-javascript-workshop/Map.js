function map(numbers) {
    let newArr =  numbers.map(function(number) {
         return number  * 2;
     })
     return newArr;
}

module.exports = map
