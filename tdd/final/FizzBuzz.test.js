const fizzBuzz=require('./FizzBuzzExercise');

test('Get "1", when pass in 1',()=>{
    const received=fizzBuzz(1);
    expect(received).toBe("1");
})

test('Get "2", when pass in 2',()=>{
    const received=fizzBuzz(2);
    expect(received).toBe("2");
})