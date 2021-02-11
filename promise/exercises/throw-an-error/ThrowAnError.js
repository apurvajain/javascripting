const promise = require("../fulfilling-a-promise/FulfillingAPromise");

function createPromise(arg) {
  return new Promise(function (fulfill, reject) {
    try {
      fulfill(JSON.parse(arg));
    } catch (e) {
      reject(e);
    }
  });
}

function executePromise() {
  createPromise(process.argv[2]).then(console.log, function (e) {
    console.log(e.message);
  });
}
executePromise();
module.exports = { executePromise, createPromise };
