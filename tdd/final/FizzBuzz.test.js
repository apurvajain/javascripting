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