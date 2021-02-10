const fulfillPromise=(promise)=>{
    promise.then((message)=>{
        console.log(message);
    })

}
var promise = new Promise(function (fulfill, reject) {
    setTimeout(()=>{
        fulfill('FULFILLED!');
    },300);
});


module.exports={fulfillPromise,promise};