const fizzbuzz = require("./fizzbuzz");

function checkFizzBuzz(value, expectValue){
    const result = fizzbuzz(value);
    expect(result).toBe(expectValue)
}

test("should return '1' when passed 1",()=>{
    checkFizzBuzz(1,'1')
})

test("should return '2' when passed 2",()=>{
    checkFizzBuzz(2,'2')
})

test("should return 'Fizz' when passed multiple of 3",()=>{
    checkFizzBuzz(6,'Fizz')
})

test("should return 'Buzz' when passed multiple of 5",()=>{
    checkFizzBuzz(10,'Buzz')
})

test("should return 'FizzBuzz' when passed multiple of 3 & 5",()=>{
    checkFizzBuzz(15,'FizzBuzz')
})
