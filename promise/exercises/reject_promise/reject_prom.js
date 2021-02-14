var promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        reject(Error("REJECTED!"))
        }, 300);
  });

  function display()
  {
      promise.then(null,onReject);
  }
  
  function onReject (error) {
    console.log(error.message);
  }
  display();
  module.exports=
  {
      promise,
      display,
      onReject
  }
  // Your solution here