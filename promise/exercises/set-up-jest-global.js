function getPromise1(){
    return Promise.resolve('Promise1');
}
function getPromise2(){
    return Promise.resolve('Promise2');
}

function first(){
    return Promise.resolve('RESOLVED');
}
function second(message){
    return Promise.resolve(message);
}


global.getPromise1 = getPromise1;
global.getPromise2 = getPromise2;
global.first = first;
global.second = second;
