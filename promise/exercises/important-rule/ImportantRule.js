function alwaysThrows(){
    throw Error("OH NOES");
}

function iterate(num){
    console.log(num);
    return num+1;
}
function executePromise(){
    Promise.resolve(1).then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch((error)=>{console.log(error.message)});
}

executePromise();

module.exports = {
    alwaysThrows,
    iterate,
    executePromise
}
