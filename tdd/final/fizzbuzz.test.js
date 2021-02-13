const fizzbuz = require('./fizzbuzz')


function checkFizzbuzz(value, exp) {
    const result = fizzbuz(value);
    expect(result).toBe(exp);
}

test('should return "1" when passed 1', () => {
    checkFizzbuzz(1, "1");
})

test('should return "2" when passed 2', () => {
    checkFizzbuzz(2,"2");
})

