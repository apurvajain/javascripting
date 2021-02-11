const promise = new Promise ( function(resolve, reject) {
   resolve('PROMISE VALUE')
});

promise.then(console.log)

console.log("MAIN PROGRAM")

module.exports = {promise}