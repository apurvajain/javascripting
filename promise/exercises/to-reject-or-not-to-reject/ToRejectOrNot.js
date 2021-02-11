var promise = new Promise((resolve, reject) => {
  resolve("I FIRED");
  reject(Error('I DID NOT FIRE'));
});

function onRejected(error) {
  console.log(error.message);
}

function executePromise() {
  promise.then((message) => {
    console.log(message);
  }, onRejected);
}

executePromise();

module.exports = {
  promise,
  executePromise
};
