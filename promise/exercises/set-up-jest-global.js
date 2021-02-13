function getPromise1(){
    return Promise.resolve('Promise1');
}
function getPromise2(){
    return Promise.resolve('Promise2');
}

function first() { 
    return new Promise((resolve, reject) => { 
        resolve("RESOLVED FIRST")
    })
}

function second(res) { 
    return new Promise((resolve, reject) => { 
        resolve(res)
    })
}

global.getPromise1 = getPromise1;
global.getPromise2 = getPromise2;
global.first = first;
global.second = second;

process.argv = ["", "", '{"obj":{"a":10}']