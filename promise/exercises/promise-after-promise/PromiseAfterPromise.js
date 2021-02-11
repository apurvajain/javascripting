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
     execute,
    onFulfilled
}