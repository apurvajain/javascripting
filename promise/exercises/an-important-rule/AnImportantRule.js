function iterate(num) {
  console.log(num);
  return num + 1;
}

function alwaysThrows() {
  throw new Error('OH NOES');
}

function onReject(error) {
  console.log(error.message);
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
        .then(iterate)
        .catch(onReject);
}

executePromise();

module.exports = {iterate, alwaysThrows, onReject, executePromise}