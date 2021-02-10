const fizzbuzz = require("./fizzbuzz");

function testFizzBuzz(value, expectValue){
    const result = fizzbuzz(value)
    expect(result).toBe(expectValue)
}

test('should return 1 when passed 1', () => {
    testFizzBuzz(1,'1')
})

test('should return 2 when passed 2', () => {
    testFizzBuzz(2, '2')
})

test('should return Fizz when passed multiple of 3', () => {
    testFizzBuzz(3, 'Fizz')
})

test('should return Buzz when passed multiple of 5', () => {
    testFizzBuzz(5, 'Buzz')
})

test('should return FizzBuzz when passed multiple of 3 and 5', () => {
    testFizzBuzz(15, 'FizzBuzz')
    testFizzBuzz(45, 'FizzBuzz')
})