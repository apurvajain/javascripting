const wait = function (seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  };
  
  wait(1)
    .then(() => {
      console.log("1 second passed");
      return wait(1);
    })
    .then(() => console.log("2 second passed"));

//to promisify set timeout need to give its own resolve
