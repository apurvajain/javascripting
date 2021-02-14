const { TestScheduler } = require("jest");

//getting the whole thing as an object
const fizzbuzz= require('./fizzbuzz')

//fizzbuzz.fizzbuzz1

test('can call fizzbuzz', ()=>{
    fizzbuzz();
})