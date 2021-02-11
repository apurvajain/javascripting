var promise = new Promise(function (fulfill, reject) {
      setTimeout(() => {
        reject(Error('REJECTED!'))
      }, 300);
  });

function executePromise(){
    promise.then(null,onReject);
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

