function recursiveFilter(array,func,output)
{
    if(array.length===0)
    {
        return output;
    }
    if(func(array[0]))
    {
        output.push(array[0]);
    }
    
    recursiveFilter(array.slice(1),func,output);
    return output;
}

const array=[-1,2,-3,4,-5,6];

const negativeArray=recursiveFilter(array,function(value)
{
    return value<0;
},[])

console.log(negativeArray);