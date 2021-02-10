function slice(array,startIndex,endIndex){
    const newArray=[];
    if(startIndex>=array.length){
        return;
    }
    if(startIndex<0){
        startIndex=array.length+startIndex;
    }
    if(!endIndex){
        endIndex=array.length;
    }
    if(endIndex<0){
        endIndex=array.length+endIndex;
    } 
    for(let i=startIndex ;i < endIndex; i++){
        newArray.push(array[i]);
    }
    return newArray;
}

const array=[1,2,3,4,5];

console.log(slice(array,3));
console.log(slice(array,-1));
console.log(slice(array,1,4));
console.log(slice(array,-3,-1));
console.log(slice(array,2,-3));