var promise = new Promise(function (resolve, reject) {
    resolve("I FIRED")
    const errorObject = {
        message: "I DID NOT FIRE"
    }
    reject(errorObject);
});

function onReject(error) {
    console.log(error.message);
};
function checkResolveOrReject() {
    promise.then((message) => console.log(message), onReject);

}
//console.log(promise);
//checkResolveOrReject();

module.exports = {
    promise,
    onReject,
    checkResolveOrReject
}

