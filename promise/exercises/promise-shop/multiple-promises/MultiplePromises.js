const all=(promise1,promise2)=>{
    let counter=0;
    let valueArray=[];
    const finalPromise=new Promise((resolve,reject)=>{

        
        promise1.then(value=>{
            valueArray[0]=value;
            counter++;
            if(counter===2){
               
                resolve(valueArray);
            }
        });
        promise2.then(value=>{
            valueArray[1]=value;
            counter++;
            if(counter===2){
                
                resolve(valueArray);
            }
        });
    });
    return finalPromise;
}

all(getPromise1(),getPromise2()).then(console.log);

module.exports=all;