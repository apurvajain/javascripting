var promise = new Promise(function(fulfill,reject){
   fulfill('PROMISE VALUE');
});
function execute(){
    promise.then(console.log);
    console.log('MAIN PROGRAM');
}

execute();

module.exports = {
    promise,
    execute
}
