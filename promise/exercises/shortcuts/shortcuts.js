var promise=Promise.reject(new Error("REJECTED"));

function execute()
{
    promise.then(null,function(err)
    {
        console.log(err.message);
        // console.log("REJECTED");
    }).catch((err)=>{
        console.log(err.message);
        console.log("CATCH");   
    })
}

execute()

module.exports = {promise, execute}