function countWords(inputWords) {
    //accumulator - object
    //currentValue - array  element
    return inputWords.reduce((accumulator, currentValue) => {
      //initial value of  all will be undefined
        accumulator[currentValue] = ++accumulator[currentValue] || 1  //increment or initialise to 1
        return accumulator
    },{})
  }
  
  // Array.reduce((acc,cv) => {
  //   return
  // },iv)
  
  //countWords(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'])
  module.exports = countWords;
  