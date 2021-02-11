const lotteryPromise = new Promise(function (resolve, reject) {
    if (Math.random() >= 0.1) {
      resolve("You won lottery");
    } else {
      reject("You lost your money");
    }
  });
  
  lotteryPromise
    .then((res) => console.log(res))
    .catch((err) => console.error(err));


