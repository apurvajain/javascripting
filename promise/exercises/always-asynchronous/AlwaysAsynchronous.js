var promise = new Promise(function(resolve, reject){
    resolve('PROMISE VALUE')
})

function executePromise(){
    promise.then((message)=>{
        console.log(message);
    })
    console.log('MAIN PROGRAM');
}

module.exports={
    promise,
    executePromise
}