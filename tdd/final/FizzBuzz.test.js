const fizzBuzz= require('./FizzBuzz')

//refactor: Callable + return "1"
test('should return "1" when 1 is passed', ()=>{
    const result= fizzBuzz(1)
    expect(result).toBe("1");
})

test('should return "1" when 1 is passed', ()=>{
    const result= fizzBuzz(2)
    expect(result).toBe("2");
})

test('should return "Fizz" when multiple of 3 is passed', ()=>{
    const result= fizzBuzz(3)
    expect(result).toBe("Fizz");
})

test('should return "Buzz" when multiple of 5 is passed', ()=>{
    const result= fizzBuzz(5)
    expect(result).toBe("Buzz");
})