const numbers= [55, 66, 77, 88, 99]

function isDivByEleven(value)
{
    return value%11==0
}

console.log(numbers.every(isDivByEleven))
