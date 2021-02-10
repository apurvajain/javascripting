

const promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        fulfill('FULFILLED!');
    },300);
  
});
function usePromise(){
    promise.then((data)=>{
        console.log(data);
    });
}

usePromise();


// function executePromise(){

// }

module.exports = {
    promise,
    usePromise
}