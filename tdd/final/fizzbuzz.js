function fizzbuzz(value){
    var string = ""
    if(value % 3 === 0){
        string += "Fizz"
    }
    if(value % 5 === 0){
        string += "Buzz"
    }
    if(value % 3 !== 0 && value % 5 !== 0) {
        string += value
    }
    return string
    }
    
    module.exports = fizzbuzz;