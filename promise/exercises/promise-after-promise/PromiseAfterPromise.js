function first(){
    return Promise.resolve('RESOLVED');
}
function second(message){
    return Promise.resolve(message);
}

function onFulfilled(response) {
    console.log(response)
}

function execute(){
    first()
    .then((message)=> {
        return second(message);
    })
    .then((message)=>{onFulfilled(message)});
}



execute();

module.exports = {
     first,
     second,
     execute,
    onFulfilled
}