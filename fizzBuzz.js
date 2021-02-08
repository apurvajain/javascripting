function fizzbuz(param){
    if(param%3===0){
        if(param%5===0){
            return "FizzBuzz"
        }
        return 'Fizz';
    }
    else if(param%5=== 0){
        return 'Buzz';
    }
 return(param.toString())
}
module.exports= fizzbuz;