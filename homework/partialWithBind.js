var partialBind = function(namespace){
    return console.log.bind(console, namespace);
}
module.exports = partialBind;