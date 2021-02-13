var promise=Promise.reject(new Error('REJECTED!'));

function rejectPromise(){
    promise.catch((err)=>console.log(err.message))
}


rejectPromise()
module.exports={promise,rejectPromise}

