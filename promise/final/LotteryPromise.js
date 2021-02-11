const lotteryPromise = new Promise((resolve, reject)=> {
    if(Math.random()>0.6){
        resolve("You won lottery :)");
    }
    else{
        reject("You lost your money :(")
    }
    
});

lotteryPromise.then(console.log()).catch(console.log);