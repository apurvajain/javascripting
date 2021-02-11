// Two functions will be provided as global functions that you can use: first
// and second.

// Call the first function in your program. first() will return a promise that
// will be fulfilled with a secret value.

// Call the second with the fulfilled value of first. Return the promise returned
// by second in your onFulfilled callback.

// Finally, print the fulfilled value of that new promise with console.log.

//......................................................//
//This is globally declared

// const first = () => {
//   return Promise.resolve('RESOLVED FIRST')
// }

// const second = (message) => {
//   return Promise.resolve(message)
// }

function executePromises() {
  first() //this returns promise with value 'RESOLVED FIRST'
    .then(second)   //'RESOLVED FIRST' passed as message to second
    .then((message) => {    //message  of second resolved promise given as message
      console.log(message);
    });
}

executePromises();

module.exports = executePromises;
