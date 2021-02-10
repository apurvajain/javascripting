const lotteryPromise = new Promise(function (resolve, reject) {
    resolve("You won lottery");
});

lotteryPromise.then(function(output){
    console.log(output);
});
