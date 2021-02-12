var promise = new Promise(function(resolve,reject) {
    setTimeout(()=>{
        resolve("FULFILLED!")
    },300)
})

function usePromise(){
    promise.then((res)=>{
        console.log(res)

    //above  two lines can be written as:
    //promise.then(console.log)
    })
}
module.exports = {
    promise,
    usePromise
}
