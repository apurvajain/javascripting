//first class functions
function sayHello() {
    console.log("hello")
}
sayHello()

sayHello.item = 'greet';
console.log(sayHello.item)

//assign function to var
const square = function (x) {
    return x * x;
}

console.log(square(5));
const foo = square;

console.log(foo(6));

foo.p="nice"
console.log(square.p)

square.x="bad"
console.log(foo.x)

//after assigning function,they both point to same memory space

//Passing Functions as Parameters

function getFood(){
    console.log("pizza")
}
function getDrink(){
    console.log("coke")
}
function getDiet(type,getFood,getDrink){
if(type=="food"){
    getFood()
}else{
    getDrink()
}
}
getDiet("food",getFood,getDrink)