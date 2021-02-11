function onReject(error) {
    console.log(error.message);
  }
  
  var promise = new Promise(function (fulfill, reject) {
    setTimeout(function () {
      reject(new Error("REJECTED!"));
    }, 300);
  });
  promise.then(() => {}, onReject);
  
  module.exports = promise;