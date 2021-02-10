function getShortMessages(messages) {
    return messages.filter(function (item) {
        return item.message.length < 50;
    }).map(item => {
        return item.message;
    })
}
const messages = [{
    message: 'Esse id amet quis eu esse aute officia ipsum.'
}, {
    message: 'Tempor quis esse consequat sunt ea eiusmod.'
}, {
    message: 'Id culpa ad proident ad nulla laborum incididunt. Ullamco in ea et ad anim anim ullamco est.'
}
]
let finalArr=getShortMessages(messages)
console.log(finalArr);
module.exports = getShortMessages
