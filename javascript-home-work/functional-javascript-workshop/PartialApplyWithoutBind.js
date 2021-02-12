var slice = Array.prototype.slice

function logger(namespace) {
    return function logging(){
        var arrayArguments=slice.call(arguments);
        //arrayArguments.splice(0, 0, `${namespace.toUpperCase()}`);
        arrayArguments=[namespace].concat(arrayArguments); //namespace in [] to create it into an array
        //console.log(arrayArguments);
        console.log.apply(null,arrayArguments);
        
    }
}
// const log=logger("Hello: ");
// log("name","class");
module.exports = logger