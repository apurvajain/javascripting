function countWords(inputWords) {
    const result={}
    inputWords.reduce(function(accumulator,current){
        if(!result[current]){
            result[current]=1
        }
        else{
            result[current]+=1
        }
    },"")
    return result
  }
  
  module.exports = countWords
