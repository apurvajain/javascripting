function first(){
    return Promise.resolve('RESOLVED');
}
function second(message){
    return Promise.resolve(message);
}

function execute(){
    first().then(second).then(onFulfilled);
}


function onFulfilled(response) {
    console.log(response)
}

module.exports = {
     first,
     second,
     execute,
    onFulfilled
}