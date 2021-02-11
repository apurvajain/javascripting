//doubt ,if there are two thens, and  the first then throws an error, while there is no error handler for that, what will happen
const parsePromised=()=>{
    try{
        const data=JSON.parse(process.argv[2]);
        return Promise.resolve(data);
    }catch(e){
        return Promise.reject(e.message);
    }
}
const executePromise=()=>{
    parsePromised().then(console.log,console.log);
}

module.exports={
    parsePromised,
    executePromise
}


// const parsePromised=(count)=>{
//     if(count<1){
//         return Promise.resolve(count+1);
//     }
//     return Promise.reject('Error');
// }

// parsePromised(90).then(parsePromised).then(parsePromised).then(parsePromised,console.log);