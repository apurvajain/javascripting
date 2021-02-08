function every(array,func){
    for(let i = 0; i< array.length; i++){
        const isTrue = func(array[i]);
        if(!isTrue){
            return false;
        }
    }
    return true;
}

const array1=[1, 2, 3, 4, 5];
const array2=[1, 2, 3, 4, -1];
function checkPositiveArray(value){
    return value>=0;
}

const isAllPositive1=every(array1,checkPositiveArray);
const isAllPositive2=every(array2,checkPositiveArray);

console.log(isAllPositive1);
console.log(isAllPositive2);

