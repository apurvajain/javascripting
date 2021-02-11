
function all(promise1,promise2){
    var counter = 0;
    var result = new Array(2);
    return new Promise(function(resolve,reject){
    
        function increment(val,idx){
            counter += 1;
            result[idx]=val;
            if(counter == 2) {
                resolve(result);
            }
        }
         
        promise1.then((val)=>{increment(val,0)});
        promise2.then((val)=>{increment(val,1)});

    })  

}

all(getPromise1(),getPromise2()).then(console.log);


module.exports = {
    all
}
