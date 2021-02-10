function fizzbuzz(val){
    if(val%3==0){
        if(val%5==0)
            return "FizzBuzz";
        return "Fizz";
    }
    if(val%5==0)
        return "Buzz";
    return val.toString();
}
module.exports=fizzbuzz;