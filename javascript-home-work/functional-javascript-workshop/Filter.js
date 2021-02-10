function getShortMessages(messages) {
  let messageWithLessThan50CharsArr = [];
  let  messageWithLessThan50Chars = messages.filter(function (msg) {
      return msg.message.length < 50 ? true : false
  })
  messageWithLessThan50CharsArr = messageWithLessThan50Chars.map((obj) => {
      return obj.message
  })
  return messageWithLessThan50CharsArr;

}

module.exports = getShortMessages