
// Call the first function in your program. first() will return a promise that will be fulfilled with a secret value.

// Call the second with the fulfilled value of first. Return the promise returned by second in your onFulfilled callback.

// Finally, print the fulfilled value of that new promise with console.log.

const first= ()=>{
    return Promise.resolve("SECRET VALUE");
}

const second = (message) => {
    return Promise.resolve(message);
}
const executePromise= ()=> {
    first().then(second()).then(console.log);
}

//executePromise();
module.exports={
    executePromise,
    first,
    second
};