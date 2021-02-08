function some(array,func){
    for(let i = 0; i< array.length; i++){
        const isTrue = func(array[i]);
        if(isTrue){
            return true;
        }
    }
    return false;
}

const array1=[1, 2, 3, 4, 5];
const array2=[1, 2, 3, 4, -1];
function checkNegativeArray(value){
    return value<0;
}

const isSomeNegative1=some(array1,checkNegativeArray);
const isSomeNegative2=some(array2,checkNegativeArray);

console.log(isSomeNegative1);
console.log(isSomeNegative2);
