var promiseResolve = Promise.resolve("RESOLVED!")
var promiseReject = Promise.reject(new Error('REJECTED!'));

function executePromise(){
    promiseReject.catch((error) => {
        console.log(error);
      });
}
module.exports={
    promiseResolve,
    promiseReject,
    executePromise
}