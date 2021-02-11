const lotteryPromise = new Promise(function (fulfill, reject) {
  if (Math.random() >= 0.5) {
    fulfill("You won lottery");
  } else {
    reject("You lost lottery");
  }
});
lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
