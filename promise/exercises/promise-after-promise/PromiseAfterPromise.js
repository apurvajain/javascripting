function executePromise(){
    first().then((res) => second(res)).then((message) => {
        console.log(message);
    });
}


module.exports={
    executePromise
}