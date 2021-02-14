const { TestScheduler } = require("jest");

//getting the whole thing as an object
const fizzbuzz= require('./fizzbuzz')

//fizzbuzz.fizzbuzz1

// test('can call fizzbuzz', ()=>{
//     fizzbuzz();
// })  

test("should return '1' when passed 1", ()=>{
    const result=fizzbuzz(1);
    expect(result).toBe('1');
})  