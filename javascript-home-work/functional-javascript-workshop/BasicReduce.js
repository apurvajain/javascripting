function countWords(inputWords) {
    const countWordsObject={};
    inputWords.reduce((accumulator,currentValue)=>{
        if(!countWordsObject[currentValue]){
            countWordsObject[currentValue]=1;
        }
        else{
            countWordsObject[currentValue]+=1;
        }
    },'');
    return countWordsObject;    
  }
  
  
  module.exports = countWords