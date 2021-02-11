const alwaysThrows = () => {
    throw new Error('OH NOES');
}

const iterate = (argument) => {
    console.log(argument);
    return argument + 1;
}
const executePromise = () => {
    Promise.resolve(iterate(1))
        .then(iterate)
        .then(iterate)
        .then(iterate)
        .then(iterate)
        .then(alwaysThrows)
        .then(iterate)
        .then(iterate)
        .then(iterate)
        .then(iterate)
        .then(iterate, (e) => console.log(e.message));
}

module.exports = {
    iterate,
    executePromise,
    alwaysThrows
}