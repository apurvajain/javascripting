function doubleAll(numbers) {
    var result = numbers.map((v)=> v*2);
    return result;
  }
  const numbers= [1,2,3,4]
  console.log(doubleAll(numbers));
  module.exports = doubleAll