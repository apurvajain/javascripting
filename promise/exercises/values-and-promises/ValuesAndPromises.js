function attachTitle(firstArgument) {
  return "DR. " + firstArgument;
}
const fulfilledPromise = Promise.resolve("MANHATTAN");
fulfilledPromise.then(attachTitle).then(console.log);

module.exports = { fulfilledPromise, attachTitle };
