const promise = new Promise(function(resolve, reject){
    setTimeout(() => {
      reject(("REJECTED!"));
    },300)
})

function onReject(err)
{
    console.log(err)
}
function rejectPromise(){
    promise.then(null,onReject)
}

rejectPromise()
module.exports= {promise, onReject}