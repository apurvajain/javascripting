function countWords(inputWords) {
    return inputWords.reduce(function(count, currentValue){
        if (!count[currentValue]){
          count[currentValue] = 1;
        } else {
          count[currentValue] = count[currentValue] + 1;
        }
        return count;
      },{});
  }

  module.exports = countWords;