const numbers=[1,2,3,4,5,6];

function filterr(number, output, len){
    if(len=== number.length){
        return output;
    }
    if(numbers[len]%2=== 0){
        output.push(numbers[len]);
    }
    filterr(number, output, len+1);
}
var out=[];     
filterr(numbers, out, 0)
console.log(out);