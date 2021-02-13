const array=[1,2,3,4,5,6];

const withInitalValue=array.reduce(function(accumulator,currentValue){
    console.log(accumulator,currentValue)
    return accumulator+currentValue
})

console.log(withInitalValue)

const withoutInitalValue=array.reduce(function(accumulator,currentValue){
    console.log(accumulator,currentValue)
    return accumulator+currentValue
},20)

console.log(withoutInitalValue)
