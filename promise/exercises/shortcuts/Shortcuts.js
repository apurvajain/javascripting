var promiseResolved = Promise.resolve("SUCCESS");
var promiseRejected = Promise.reject("FAILED");

function executePromise() {
  promiseRejected.catch(function (err) {
    console.log(err.message);
  });
}

executePromise();

module.exports = {
  promiseResolved,
  executePromise,
};
