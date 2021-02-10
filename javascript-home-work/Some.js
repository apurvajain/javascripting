//The some() method checks if any of the elements in an array pass a test (provided as a function).

//The some() method executes the function once for each element present in the array:

//If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
//Otherwise it returns false
const weight=[33,90,102,55,77,110]

function checkOverWeight(weight)
{
    return weight>=70;
}

const isOverWeight=weight.some(checkOverWeight);
console.log(isOverWeight)
//returns true 