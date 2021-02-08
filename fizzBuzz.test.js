const fizzbuz= require('./fizzBuzz')

test('should return "1" when passed 1', ()=>{
    const result= fizzbuz(1);
    expect(result).toBe('1');
})

test('should return "2" when passed 2', ()=>{
    const result= fizzbuz(2);
    expect(result).toBe('2');
})
test('should return "Fizz" when passed 3', ()=>{
    const result= fizzbuz(3);
    expect(result).toBe('Fizz');
})
test('should return "Buzz" when passed 5', ()=>{
    const result= fizzbuz(5);
    expect(result).toBe('Buzz');
})