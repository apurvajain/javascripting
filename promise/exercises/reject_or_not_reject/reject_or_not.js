
var promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(Error('I DID NOT FIRE'))
});

function display(){
  promise.then(console.log,onReject);
}

function onReject (error) {
  console.log(error.message);
}

display();


module.exports = {
  promise,
  display,
  onReject
}