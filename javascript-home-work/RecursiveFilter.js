//program to filter values greater than 50
const array=[10,33,57,89,100];

function filter(array,func,newArray)
{
    if(array.length==0) return newArray;
    newArray.push(func(array[0]));
    return filter(array.slice(1),func,newArray)
}
const resultArray=filter(array,function(number){
    return number>50;

},[])
console.log(resultArray)
