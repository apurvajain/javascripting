const fizzbuz = require('./fizzbuzz')


function checkFizzbuzz(value, exp) {
    const result = fizzbuz(value);
    expect(result).toBe(exp);
}

test('should return "1" when passed 1', () => {
    checkFizzbuzz(1, "1");
})

test('should return "2" when passed 2', () => {
    checkFizzbuzz(2,"2");
})

test('should return "Fizz" when passed multiple of 3', () => {
    checkFizzbuzz(3,"Fizz");
})

test('should return "Buzz" when passed multiple of 5', () => {
    checkFizzbuzz(5,"Buzz");
})

test('should return "FizzBuzz" when passed multiple of 3 and 5', () => {
    checkFizzbuzz(15,"FizzBuzz");
})


