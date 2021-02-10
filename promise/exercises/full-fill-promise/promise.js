
var promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("FULFILLED!")
    }, 300);
})

var executePromise = function(){
    promise.then((res) => {
        console.log(res);
    });
}


module.exports = {promise, executePromise};