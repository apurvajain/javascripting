
function getShortMessages(messages) {

    return messages.filter(function(obj){
        return obj.message.length<50;
   })
        
}

module.exports = getShortMessages
