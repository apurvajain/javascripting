var promise = Promise.reject(new Error('REJECTED!'));

function execute(){
    promise.then(null,function(error){
        console.log('Inside then');
        console.log(error.message);
    }).catch((error)=>{
        console.log('Inside catch');
        console.log(error.message)
    });
}

execute();

module.exports = {
    promise,
    execute
}

