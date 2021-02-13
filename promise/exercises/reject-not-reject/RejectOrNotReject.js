var promise = new Promise(function (resolve, reject) {
    resolve("I FIRED")
    const errorObj = {
        message: "I DID NOT FIRE"
    }
    reject(errorObj);
});

function onReject(error) {
    console.log(error.message);
};

function checkForResolveOrReject() {
    promise.then((message) => console.log(message), onReject);

}

module.exports = {
    promise,
    onReject,
    checkForResolveOrReject
}