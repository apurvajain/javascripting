function fizzbuz(val) {
    if (val % 3 === 0) {
        return "Fizz";
    }
    if(val%5===0)
    {
        return "Buzz";
    }
    return val.toString();

}

module.exports = fizzbuz