function logger(namespace) {
  return function warn() {
    console.log.apply(this, [namespace].concat(Object.values(arguments)));
  };
}
module.exports = logger;

// If I do [namespace].push.apply([namespace],Object.values(arguments)) it doeesnt give the desired output, why so?
// According to the official documentation if we want to concat an array to existing array and return existing array it should work right?
