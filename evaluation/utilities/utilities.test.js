const utilities = require('./Utilities');

const MAX_WEALTH = 3000000;
const MIN_WEALTH = 50;

test('Return random value between MIN_WEALTH and MAX_WEALTH', () => {
  const wealth = utilities.generateRandomValue(MIN_WEALTH, MAX_WEALTH);
  expect(wealth).toBeGreaterThanOrEqual(MIN_WEALTH);
  expect(wealth).toBeLessThan(MAX_WEALTH);
});
