var firstPromise = first();
console.log(firstPromise);
firstPromise
  .then(function (promise2) {
    return second(promise2);
  })
  .then(console.log);
module.exports = firstPromise;
