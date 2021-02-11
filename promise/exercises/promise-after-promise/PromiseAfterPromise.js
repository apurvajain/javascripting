function first(){
    return Promise.resolve('RESOLVED FIRST');
}

function second(message){
    return Promise.resolve(message);
} 

function executePromise(){
    first().then(second()).then((message) => {
        console.log(message);
    });
}


module.exports={
    first,
    second,
    executePromise
}