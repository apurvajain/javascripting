function countWords(inputWords) {
    let occurance =  inputWords.reduce((accumulator, currentVal) => {
        if(accumulator[currentVal])
            accumulator[currentVal] = ++accumulator[currentVal]
        else {
            accumulator[currentVal] = 1
        }
        return accumulator
      }, {} )

     return occurance;
  }

  
  module.exports = countWords