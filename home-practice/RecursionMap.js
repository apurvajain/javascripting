function recursiveMap(arr,func,output)
{
    if(arr.length==0) 
    return output;
    output.push(func(arr[0]));
    recursiveMap(arr.slice(1),func,output);
    return output;
   
}

const array=[-1,2,-3,4,5,-6];

const switchArray = recursiveMap(array, function(item)
{
    return item*(-1); 
},[]);

console.log(switchArray);