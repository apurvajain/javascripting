const fruit = ["mango", "banana", "xyz"]

const len = (fruit) => fruit.length > 4;
const len2 = (fruit) => fruit.length > 6;

console.log(fruit.some(len));
console.log(fruit.some(len2));
