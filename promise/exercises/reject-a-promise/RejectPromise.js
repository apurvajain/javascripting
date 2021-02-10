var promise = new Promise(function (fulfill, reject) {
    setTimeout(() =>  {
        const errorObj={
        message:"REJECTED!"
    }
    reject(errorObj);
},300)
});

  function onReject (error) {
      console.log(error.message)
  }

  promise.then(()=> {},onReject)

module.exports = {promise, onReject}