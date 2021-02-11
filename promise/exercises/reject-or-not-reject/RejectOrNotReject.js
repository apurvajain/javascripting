var promise = new Promise(function (fulfill, reject) {
  fulfill("I FIRED");
  reject(Error("I DID NOT FIRE"));
});
function onRejected(error) {
  console.log(error.message);
}
promise.then(console.log, onRejected);
module.exports = promise;
