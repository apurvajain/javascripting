function attachTitle(name){
    return "DR."+name;
}

let promise= Promise.resolve("MANHATTAN");

promise.then(attachTitle).then(console.log)

module.exports={
    promise,
    attachTitle
}