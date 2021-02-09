const fizzbuzz = require('./fizzbuzz');

function test_value(value,expected) {
  expect(fizzbuzz(value)).toBe(expected)
}

test('Get "1", when I pass in 1', () => {
 test_value(1,"1")
});

test('Get "Fizz" when I pass in multiple of 3 ', () => {
  test_value(3,"Fizz")
});

test('Get "Buzz" when I pass in multiple of 5', () => {
  test_value(5,"Buzz")
});

test('Get FizzBuzz" when I pass in 15, a multiple of 3 and 5', () => {
  test_value(15,"FizzBuzz")
});