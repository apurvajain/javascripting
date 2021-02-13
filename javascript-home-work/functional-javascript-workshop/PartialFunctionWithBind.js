module.exports = function (namespace) {
  return console.log.bind(null, namespace);
};

// console.log is a function so we apply bind on it
// namespace is the fixed argument
// again we call this return fxn with extra args
// So here bind already gives namespace to console.log so console.log has namespace within its scope
// And later when additional arguments are passed when this new function is called, it will be appended along with namespace
// So there will be namespace, arg1, arg2,....
