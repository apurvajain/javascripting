function getShortMessages(messages) {
    return messages.filter(function(it) {
      return it.message.length < 50
    }).map(function(item) {
      return it.message
    })
  }

  module.exports = getShortMessages