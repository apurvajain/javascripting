function all(promise1, promise2) {
  let counter = 0;
  let res = [];
  const promise = new Promise((resolve, reject) => {
    promise1.then((value) => {
      res[0] = value;
      counter++;
      if (counter == 2) {
        resolve(res);
      }
    });
    promise2.then((value) => {
      res[1] = value;
      counter++;
      if (counter == 2) {
        resolve(res);
      }
    });
  });
  return promise;
}

//getPromise1() and get Promise(2) defined in set-up-jest-global
all(getPromise1(),getPromise2()).then(console.log)

module.exports = all