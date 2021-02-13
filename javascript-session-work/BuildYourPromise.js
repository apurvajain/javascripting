const lottery=new Promise(function(resolve,reject){
    if(Math.random()>0.5)
    {
        resolve("you won")
    }
    else
    {
        reject("you lost")
    }
})
lottery
.then((res)=>console.log(res))
.catch((err)=>console.log(err))