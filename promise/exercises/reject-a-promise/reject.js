// rejects with an Error object.
// The Error object should be constructed with parameter 'REJECTED!', which is
// the textual message of the error.

var promise = new Promise(function (fulfill, reject) {
  setTimeout(() => {
    reject(new Error("REJECTED!"));
  }, 300);
});

function onReject(error) {
  console.log(error.message); //object has property message
}

function executePromise() {
  promise.then(null, onReject);
}

module.exports = {
  promise,
  executePromise
};
