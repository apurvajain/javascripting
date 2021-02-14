function logger(namespace) {
    return function logging() {
      var arrayArguments = Array.prototype.slice.call(arguments);
      //console.log(arrayArguments)
      arrayArguments = [namespace].concat(arrayArguments);
      //console.log(arrayArguments);
      console.log.apply(console, arrayArguments);
    };
  }
  
  // var info = logger("INFO:");
  // info("this is an info message"); // INFO: this is an info message
  
  module.exports = logger;
  