const fizzBuzz=require('./FizzBuzzExercise');

test("Callable function",()=>{
    fizzBuzz();
})
test('Get "1", when pass in 1',()=>{
    const received=fizzBuzz(1);
    expect(received).toBe("1");
})