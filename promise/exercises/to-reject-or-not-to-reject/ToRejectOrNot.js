var promise = new Promise((resolve, reject) => {
  resolve("I FIRED");
  const errorObject = {
    message: "I DID NOT FIRE",
  };
  reject(errorObject);
});

function onReject(error) {
  console.log(error.message);
}

function executePromise() {
  promise.then((message) => {
    console.log(message);
  }, onReject);
}

module.exports = {
  promise,
  executePromise
};
