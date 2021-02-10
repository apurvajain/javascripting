var age= [55, 23, 65, 60, 43]

function isEven(element){
    return element%2=== 0;
}
console.log("1. "+age.some(isEven));

console.log("2. "+age.some(function(value){
    return value >45
}));

const isOdd=(element)=> element%2!= 0;
console.log("3. "+age.some(isOdd));

