// binding some of the arguments to the first function invoke
var product = function(a){
    //some in later
    return function(b){
        return a*b;
    }
}

console.log(product(2)(4));
var product2 = product(2);
console.log(product2(10));