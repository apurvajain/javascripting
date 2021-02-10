var promiseResolve = Promise.resolve("FULFILLED!");
var promiseReject = Promise.reject(new Error('REJECTED!'));

function executePromise(){
    promiseReject.catch((error) => {
        console.log(error.message);
      });
}
module.exports={
    promiseResolve,
    promiseReject,
    executePromise
}