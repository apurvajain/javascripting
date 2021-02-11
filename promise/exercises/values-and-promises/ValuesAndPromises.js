function attachTitle(string) {
    return 'DR. ' + string
}
var promise = new Promise(function(fulfill,reject){
    fulfill('MANHATTAN');
}) ; 


function executePromise(){
    promise.then(attachTitle).then(console.log);
}

executePromise();

module.exports = {
    promise,
    attachTitle,
    executePromise
}
