
function countWords(arr) {
    return arr.reduce(function(countMap, w) {
      countMap[w] = ++countMap[w] || 1 
      return countMap
    }, {}) 
  }
  
  module.exports = countWords
  