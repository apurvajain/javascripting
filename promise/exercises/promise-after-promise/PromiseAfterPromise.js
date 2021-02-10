const first = () => {
    return Promise.resolve('RESOLVED FIRST');
}
const second = (message) => {
    return Promise.resolve(message);
}
const executePromises = () => {
    first().then(second()).then((message) => {
        console.log(message);
    });
}


module.exports={
    executePromises,
    first,
    second
}