const lotteryPromise = new Promise(function (resolve, reject) {
    if (Math.random() >= 0.5) {
      resolve("You won lottery");
    } else {
      reject("You lost your money");
    }
  });
  
  lotteryPromise
    .then(console.log,console.log)
    