'use strict';

var promise = new Promise(function (fulfill, reject) {

    setTimeout(() => {
        fulfill("FULFILLED!")
    }, 300);

});

function display() {
    promise
        .then((res) => console.log(res))
}
display();

module.exports = {
    promise,
    display
}