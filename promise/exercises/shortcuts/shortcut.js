var promise = Promise.reject(new Error('REJECTED!'));

function display(){
    promise.then(null,function(err){
        console.log('error when inside then');
        console.log(err.message);
    }).catch((err)=>{
        console.log('error when inside catch');
        console.log(err.message)
    });
}

display();

module.exports = {
    promise,
    display
}