function alwaysThrows() {
  throw new Error("OH NOES");
}

function iterate(number) {
  console.log(number);
  return number + 1;
}
function executePromise() {
  Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch((err) => console.log(err.message));
}
executePromise();
module.exports = executePromise;
