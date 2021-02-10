var promise= new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('FULFILED!');
    }, 300)
})
const fullFillaPromise= promise=>{
    promise.then((message)=>{
        console.log(message);
    })
}

module.exports= {fullFillaPromise, promise};