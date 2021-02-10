const { test, expect } = require("@jest/globals");
const fizzbuzz = require("./fizzbuzz");

//redundant test case//
// test("can call fizzbuzz", () => {
//   fizzbuzz();
// });

function checkFizzBuzz(received,expected){
    const result = fizzbuzz(received)
    expect(result).toBe(expected)
}

test("should return '1' when 1 is passed",() => {
    checkFizzBuzz(1,'1')
})

test("should return '2' when 2 is passed",() => {
    checkFizzBuzz(2,'2')
})

test("should return 'fizz' when multiple of 3 is passed",() => {
    checkFizzBuzz(3,'fizz')
})

test("should return 'buzz' when multiple of 5 is passed",() => {
    checkFizzBuzz(5,'buzz')
})

test("should return 'fizzbuzz' when multiple of 3 and 5 is passed",() => {
    checkFizzBuzz(15,'fizzbuzz')
})

