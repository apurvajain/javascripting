  
function alwaysThrows(){
    throw Error("OH NOES");
}

function iterate(arg){
    console.log(arg);
    return arg+1;
}
function display(){
    Promise.resolve(1).then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch((err)=>{console.log(err.message)});
}

display();

module.exports = {
    alwaysThrows,
    iterate,
    display
}