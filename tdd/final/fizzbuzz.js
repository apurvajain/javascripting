function fizzbuzz(value) {
    if(value%3===0){
        return "Fizz";
    }
    return value.toString();

}
module.exports =fizzbuzz
//syntax to export particular function
/*module.exports= {
    fizzbuzz,
    fizzbuzz1,
    fizzbuzz2
}*/
//export multiple  
//module refers to current module of js file 