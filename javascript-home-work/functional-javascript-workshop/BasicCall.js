function duckCount() {
    return Array.prototype.reduce.call(arguments,function(accumulator,currentValue){
        const hasQuackProperty=Object.prototype.hasOwnProperty.call(currentValue,'quack');
        if(hasQuackProperty){
            accumulator+=1;
        }
        return accumulator
    },0);
}
  
  module.exports = duckCount