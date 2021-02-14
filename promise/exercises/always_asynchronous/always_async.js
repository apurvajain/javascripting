var promise = new Promise(function (fulfill, reject) {
    fulfill("PROMISE VALUE");

});

function display() {
    promise
        .then((res) => console.log(res));
    console.log('MAIN PROGRAM');
}
display();
module.exports = {
    promise,
    display
}