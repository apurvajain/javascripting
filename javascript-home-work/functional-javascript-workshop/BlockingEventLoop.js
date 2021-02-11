function repeat(operation, num) {
    // modify this so it can be interrupted
    if (num <= 0) return;
    operation();

    if (num % 50 === 0) {
        setTimeout(() => {
            return repeat(operation, --num);
        });
    }
    else {
        return repeat(operation, --num);
    }

}

module.exports = repeat



