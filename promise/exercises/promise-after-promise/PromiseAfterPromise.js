

function executePromise() {
    first()
    .then((res) => second(res))
    .then(console.log)
}



module.exports = executePromise


//  first()
// .then( (res) => second(res))
// .then(console.log) 

