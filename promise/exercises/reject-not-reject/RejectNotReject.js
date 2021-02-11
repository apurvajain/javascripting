var promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(Error('I DID NOT FIRE'))
});

function executePromise(){
  promise.then(console.log,onReject);
}

function onReject (error) {
  console.log(error.message);
}

executePromise();


module.exports = {
  promise,
  executePromise,
  onReject
}