const functions= require("./Functions")

var LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch1");

test("should Double Wealth ", ()=>{
    functions.doubleWealth();
})

test("should show Millionaries ", ()=>{
    functions.showMillionares();
})

test("should sort by Wealth ", ()=>{
    functions.sortByWealth();
})

test("should calculate all Wealth ", ()=>{
    functions.calculateWealth();
})

