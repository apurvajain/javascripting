const generateRandomValue = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
  // The max is exclusive and the min is inclusiv
};

module.exports = {
  generateRandomValue,
};
