// Promise represents eventual completion of async operation

// We call resolve when what we do is successful else reject
const promise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Success");
  }, 300);
});

// res is whatever we passed in the resolve function(first callback)
promise.then((res) => {
  console.log("lala " + res);
});
