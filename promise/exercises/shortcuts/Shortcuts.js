const promiseResolved=Promise.resolve('IT IS RESOLVED!');
const promiseRejected=Promise.reject(new Error('IT IS REJECTED!'));

const executePromise=()=>{
    promiseRejected.catch(error => console.log(error.message));
}
module.exports={
    promiseRejected,
    promiseResolved,
    executePromise
}