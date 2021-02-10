//promises are executed faster than callback

console.log("Test start");
setTimeout(() => {
  console.log("0 sec time");
}, 0);
Promise.resolve("Resolved promise 1").then((res) => console.log(res));

Promise.resolve("Resolved promise 2").then((res) => {
  for (i = 0; i < 1000000; i++) {}
  console.log(res);
});

console.log("Test end");