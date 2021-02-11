function attachTitle(message) {
  return "DR. " + message;
}

var promise = Promise.resolve("MANHATTAN");

function executePromise() {
  promise.then(attachTitle).then((message) => {
    console.log(message);
  });
}

executePromise();

module.exports = {
  attachTitle,
  promise,
  executePromise,
};
