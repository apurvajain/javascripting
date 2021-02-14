

const numbers=[0,1,2,3,4,5,6,7,8,9];
function doubleAll(numbers){
let num2=[];

num2=numbers.map((item)=>{
    return item*2;
})
return  num2;
}
module.exports = doubleAll