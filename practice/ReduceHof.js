const array=[1,2,3,4,5,6];

const sumNoInital=array.reduce(function(accumulator,currentValue)
{
    return accumulator+currentValue;
});

const sumInitial=array.reduce(function(accumulator,currentValue)
{
    return accumulator+currentValue;
},10);

console.log(sumNoInital); 
console.log(sumInitial); 