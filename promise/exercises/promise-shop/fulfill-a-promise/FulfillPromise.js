const promise=new Promise(function (fulfill, reject) {
    setTimeout(()=>{
        fulfill("FULFILLED!")
    },300)
})

var usePromise= function(){
    promise.then(console.log)
}
//promise.then(console.log)
usePromise();
module.exports={promise,usePromise}



