const first = () => {
    return Promise.resolve('RESOLVED FIRST');
}
const second = (message) => {
    console.log("In second "+message);
    return Promise.resolve(message);
}
const executePromises = () => {
    first().then(second).then((message) => {
        console.log(message);
    });
}

executePromises();
module.exports={
    executePromises,
    first,
    second
}