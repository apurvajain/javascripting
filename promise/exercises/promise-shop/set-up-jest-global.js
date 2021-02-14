

const getPromise1=()=>{
    return new Promise((resolve,reject)=>resolve("Promise1"));
}

const getPromise2=()=>{
    return new Promise((resolve,reject)=>resolve("Promise2"));
}

global.getPromise1=getPromise1;
global.getPromise2=getPromise2;