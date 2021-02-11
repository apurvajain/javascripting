function countWords(inputWords) {
    return inputWords.reduce(function(accumulator,currentValue)
    {
     if (accumulator[currentValue])
     {
         accumulator[currentValue]++;   
     }
     else 
     {
         accumulator[currentValue] = 1;
     }
     return accumulator;
    },{});
 }
 
   module.exports = countWords