const fizzBuzz=require('./FizzBuzzExercise');

test('Get "1", when pass in 1',()=>{
    const received=fizzBuzz(1);
    expect(received).toBe("1");
})

test('Get "2", when pass in 2',()=>{
    const received=fizzBuzz(2);
    expect(received).toBe("2");
})

test('Get "Fizz", when pass in multiple of 3',()=>{
    const received=fizzBuzz(6);
    expect(received).toBe("Fizz");
})

test('Get "Buzz", when pass in multiple of 5',()=>{
    const received=fizzBuzz(5);
    expect(received).toBe("Buzz");
})

test('Get "FizzBuzz", when pass in multiple of 3 and 5',()=>{
    const received=fizzBuzz(15);
    expect(received).toBe("FizzBuzz");
})