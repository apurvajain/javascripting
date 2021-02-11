const all=(promise1,promise2)=>{
    let counter=0;
    let valueArray=[];
    const finalPromise=new Promise((resolve,reject)=>{

        //console.log("Hello"+promise1);
        promise1.then(value=>{
            valueArray.push(value);
            counter++;
            if(counter===2){
                //console.log('HI!')
                resolve(valueArray);
            }
        });
        promise2.then(value=>{
            valueArray.push(value);
            counter++;
            if(counter===2){
                //console.log('HI!')
                resolve(valueArray);
            }
        });
    });
    return finalPromise;
}

//all(getPromise1(),getPromise2()).then(console.log);

module.exports=all;