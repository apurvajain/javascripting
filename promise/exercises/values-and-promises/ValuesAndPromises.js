

function attachTitle(string)
{
    return 'DR. ' + string;
}

promise= new Promise(function(resolve){
    resolve("MANHATTAN");
})

function usePromise(){
    promise.then(attachTitle).then(console.log);
}

usePromise()