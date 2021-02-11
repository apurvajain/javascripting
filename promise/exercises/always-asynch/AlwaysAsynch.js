const promise=new Promise((resolve,reject)=>{
    resolve('PROMISE VALUE');
})

const executePromise=()=>{
    promise.then((message)=>{
        console.log(message);
    })
    console.log('MAIN PROGRAM');
}

module.exports={
    promise,
    executePromise
}