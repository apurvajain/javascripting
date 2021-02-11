var promise = new Promise(function (fulfill, reject) {
  setTimeout(function () {
    fulfill("FULFILLED!");
  }, 300);
});
var fulfillAPromise = function () {
  promise.then((res) => {
    console.log(res);
  });
};
fulfillAPromise();
module.exports = promise;
