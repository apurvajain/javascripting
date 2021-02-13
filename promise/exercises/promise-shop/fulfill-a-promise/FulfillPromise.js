
const promise = new Promise((fulFill, reject) => {
    setTimeout(() => {
        fulFill('FULFILLED!')
    }, 300)
})

var fulfillPromise=()=>{
    promise.then(console.log)
}

fulfillPromise()

module.exports={promise,fulfillPromise}

