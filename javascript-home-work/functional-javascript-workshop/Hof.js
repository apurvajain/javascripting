function repeat(operation, num) {
  if (num === 0) return;
  return repeat(operation, --num);
}
module.exports = repeat;
