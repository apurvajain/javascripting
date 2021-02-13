function all(promise1,promise2){
    var counter = 0;
    var output = [];
    return new Promise(function(resolve,reject){
    
        function increment(val,id){
            counter += 1;
            output[id]=val;
            if(counter == 2) {
                resolve(output);
            }
        }
         
        promise1.then((val) => {increment(val,0)});
        promise2.then((val) => {increment(val,1)});

    })  

}

all(getPromise1(),getPromise2()).then(console.log);


module.exports = {
    all
}