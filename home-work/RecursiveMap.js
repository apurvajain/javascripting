//program to add 2 to every element in array
const array=[1,2,3,4,5,6];

function map(array,func,newArray)
{
    if(array.length==0) return newArray;
    newArray.push(func(array[0]));
    return map(array.slice(1),func,newArray)
}
const resultArray=map(array,function(number){
    return number+2;

},[])
console.log(resultArray)
