const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error('REJECTED!'))
    },300)
    
})


function onReject(err){
console.log(err.message)
}

function rejectPromise(){
promise.then(null,onReject)
}
rejectPromise()

module.exports={promise,rejectPromise}