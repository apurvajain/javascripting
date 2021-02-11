var promise = new Promise(function (fulfill, reject) {
    setTimeout(()=>{
        // const errorObject={
        //     message:"REJECTED!"
        // }
        reject(new Error('REJECTED!'));
    },300)
});

function onReject(error) {
    console.log(error.message);
};

promise.then(()=>{},onReject);

module.exports={
    promise,
    onReject
}
