const fizbuzz = require('./fizbuzz');

function checkFizzBuzz(value,expectValue){
       const result = fizbuzz(value);
       expect(result).toBe(expectValue);

}

test("should return '1' when passed 1", () => {
       checkFizzBuzz(1,'1');
});

test("should return '2' when passed 2", () => {
       checkFizzBuzz(2,'2');
});


test("should return 'Fizz' when passed multiple of 3", () => {
       checkFizzBuzz(3,'Fizz');
       checkFizzBuzz(15,'Fizz');
});

test("should return 'Buzz' when passed multiple of 5", () => {
       checkFizzBuzz(5,'Buzz');
       checkFizzBuzz(25,'Buzz');
});


