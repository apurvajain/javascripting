function getShortMessages(messages) {
    const newArray=messages.map(function (value){
        return value.message;
    })
    .filter(function (message){
        return message.length < 50;
    })
    return newArray;
  }
  
  module.exports = getShortMessages