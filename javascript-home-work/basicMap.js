function doubleAlLNumbers(numbers){
    res = numbers.map(function(num){
        return num * 2;
    });
    return res;
}

module.exports = doubleAlLNumbers;