function alwaysThrows() {
  throw new Error("OH NOES");
}

function iterate(arg) {
  console.log(arg);
  return arg + 1;
}

function executePromise() {
  return Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate, (e) => console.log(e.message));
}
executePromise();

// module.exports = {
//     iterate,
//     executePromise,
//     alwaysThrows
// }

module.exports = executePromise;
