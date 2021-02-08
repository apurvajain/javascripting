const fizzbuz= require('./fizzBuzz')

test('should return "1" when passed 1', ()=>{
    const result= fizzbuz(1);
    expect(result).toBe('1');
})