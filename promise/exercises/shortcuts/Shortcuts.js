const promiseResolved=Promise.resolve('RESOLVED!');
const promiseRejected=Promise.reject(new Error('REJECTED!'));

const executePromise=()=>{
    promiseRejected.catch(function (error) {
        console.log(error.message);
      });
}
module.exports={
    promiseRejected,
    promiseResolved,
    executePromise
}