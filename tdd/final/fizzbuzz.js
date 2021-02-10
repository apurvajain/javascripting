function fizzbuzz(param) {
  if (param % 3 == 0) {
    if (param % 5 == 0) {
      return "fizzbuzz";
    }
    return "fizz";
  }
  if (param % 5 == 0) {
    return "buzz";
  }
  return param.toString();
}
module.exports = fizzbuzz;
