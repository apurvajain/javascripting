
    
    var promise= new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('FULFILLED!');
    },300)
})

const fulfill=function(){


    promise.then((message)=>{
    console.log(message);
})
}
fulfill()
module.exports= {promise}