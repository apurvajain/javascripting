function forEach(array,func){
    for(let i = 0; i< array.length; i++){
        func(array[i]);
    }
}

function printSquare(value){
    console.log(value*value);
}

const array=[1,2,3,4,5];

forEach(array,printSquare);
