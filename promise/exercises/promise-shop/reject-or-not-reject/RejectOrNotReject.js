const promise=new Promise((resolve,reject)=>{
    resolve("I FIRED")
    reject(new Error('I DID NOT FIRE'))
})
function onRejected(err){
    console.log(err.message)
}

function usePromise(){
    promise.then(console.log,onRejected)
}
usePromise()
module.exports={promise,usePromise}


