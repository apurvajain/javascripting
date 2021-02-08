const fizzbuzz = require('./fizzbuzz');

test('Get "1", when I pass in 1', () => {
  expect(fizzbuzz(1)).toBe("1");
});