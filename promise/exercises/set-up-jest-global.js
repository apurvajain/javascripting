function getPromise1(){
    return Promise.resolve('Promise1');
}
function getPromise2(){
    return Promise.resolve('Promise2');
}

global.getPromise1 = getPromise1;
global.getPromise2 = getPromise2;
