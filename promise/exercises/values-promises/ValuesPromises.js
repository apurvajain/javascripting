const promise=Promise.resolve('MANHATTAN');

const attachTitle=(name)=>{
    return 'DR. '+name;
}
const executePromise=()=>{
    promise.then(attachTitle).then(console.log);
}

module.exports={promise,attachTitle,executePromise}