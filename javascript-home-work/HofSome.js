const arrayToCheck = [1, 9, 3, 43, 5];

// checks whether an element is even
function isEven(value)
{
    return value%2==0
}

console.log(arrayToCheck.some(isEven));

