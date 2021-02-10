function getShortMessages(messages) {
    return messages.filter(function(object){
        return object.message.length<50
    }).map(function(obj){
        return obj.message
    })
  }
  
module.exports = getShortMessages