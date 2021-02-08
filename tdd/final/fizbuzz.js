function fizbuzz(value) {
    if( value % 3 === 0 ){
        return "Fizz";
    }
    return value.toString();
}

module.exports = fizbuzz;
