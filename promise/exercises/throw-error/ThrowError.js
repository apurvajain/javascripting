function parsedPromised(json) {
    return new Promise(function(resolve, reject) {
        try{
            resolve(JSON.parse(json));
        }
        catch(error){
            reject(error.message);
        }
    } 
    ); 
}

function executePromise(){
    parsedPromised(process.argv[2]).then(console.log)
    .catch(console.log);    
}

executePromise();

module.exports = {
    parsedPromised,
    executePromise
}
