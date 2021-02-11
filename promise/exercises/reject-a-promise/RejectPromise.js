const promise = new Promise(function (fulfill, reject) {
    setTimeout(() => reject(new Error('REJECTED!')), 300)
});


 function onReject(error) {
    console.log(error.message);
  }
  
  promise.then(null, onReject);
module.exports = {promise}

