var slice = Array.prototype.slice

function logger(namespace) {
    return function logging(){
        var arrayArguments=slice.call(arguments);
        //arrayArguments.splice(0, 0, `${namespace.toUpperCase()}`);
        [namespace].concat(arrayArguments); //namespace in [] to create it into an array
        console.log.apply(null,arrayArguments);
        
    }
}

module.exports = logger