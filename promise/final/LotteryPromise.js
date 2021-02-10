const lotteryPromise = new Promise(function (resolve, reject) {
    resolve("You won lottery");
});
lotteryPromise.then((message)=>{
    console.log(message);
})