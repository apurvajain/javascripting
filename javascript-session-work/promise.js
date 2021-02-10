const lotteryPromise = new Promise(function (resolve, reject) {
    resolve("You won lottery");
});

lotteryPromise.then((res)=>{
    console.log(res)
})
