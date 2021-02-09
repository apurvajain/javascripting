function fizzBuzz(param){
    if(param%3=== 0){
        return "Fizz";
    }
    else if(param%5=== 0){
        return "Buzz";
    }
    return param.toString();
}
module.exports= fizzBuzz;