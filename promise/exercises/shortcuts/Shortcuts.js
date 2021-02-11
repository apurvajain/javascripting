var promise = new Promise(function (fulfill, reject) {});
promise = Promise.resolve("I AM RESPONSE");
promise = Promise.reject("I AM REJECTED");
promise.catch(function (err) {
  console.log(err);
});
module.exports = promise;
