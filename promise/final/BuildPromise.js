const lotteryPromise = new Promise(function (resolve, reject) {
    if (Math.random() >= 0.5) {
      resolve("You won lottery");
    } else {
      reject("You lost your money");
    }
  });
  
  lotteryPromise
    .then((res) => console.log(res))
    //there is 2nd parameter which .then expects, which is reject parameter
    //will look in 2nd parameter, else goes to catch
    .catch((err) => console.error(err));

    