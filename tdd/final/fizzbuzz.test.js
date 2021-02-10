
const fizzbuzz = require('./fizzbuzz')

function checkFizzBuzz(value, expectedValue) {
    const result = fizzbuzz(value);
    expect(result).toBe(expectedValue);
}

test("should return '1' when passed  1", () => {
    checkFizzBuzz(1, '1')
});

test("should return '2' when passed  2", () => {
    checkFizzBuzz(2, '2')
});

test("should return 'Fizz' when multiple of 3", () => {
    checkFizzBuzz(3, 'Fizz')
});

test("should return 'Buzz' when multiple of 5", () => {
    checkFizzBuzz(5, 'Buzz')
});

test("should return 'Buzz' when multiple of 3 and 5", () => {
    checkFizzBuzz(15, 'FizzBuzz')
    checkFizzBuzz(45, 'FizzBuzz')
    
});
module.exports = fizzbuzz