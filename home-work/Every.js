
//every() - method checks if all elements in an array passes the test provided in function
//every() - returns boolean value
const weight=[33,90,102,55,77,110]

function checkOverWeight(weight)
{
    return weight>=70;
}

const isOverWeight=weight.every(checkOverWeight);
console.log(isOverWeight)
//returns false because few values are below 70