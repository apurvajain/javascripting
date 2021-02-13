const promise=new Promise((resolve,reject)=>{
    resolve("PROMISE VALUE")

})

function usePromise(){
    promise.then(console.log)
    console.log("MAIN PROGRAM")
}

usePromise()
module.exports ={promise,usePromise}