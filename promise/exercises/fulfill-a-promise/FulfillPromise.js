const promise =  new Promise(function (resolve, reject) {
   setTimeout(() => {
        resolve("FULFILLED!")
   }, 300)
})

function usePromise() {
   promise.then((res) => {
      console.log(res)
   })
}


module.exports = {promise , usePromise}