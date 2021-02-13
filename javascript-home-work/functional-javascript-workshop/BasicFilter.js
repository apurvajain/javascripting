
function getShortMessages(messages) {

   const array=messages.map(obj=>obj.message)

   return array.filter(message=>message.length<50)
        
}

module.exports = getShortMessages
