const fizzbuzz = require('./fizzbuzz');

test('Get "1", when I pass in 1', () => {
  expect(fizzbuzz(1)).toBe("1");
});

test('Get "Fizz" when I pass in multiple of 3 ', () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});