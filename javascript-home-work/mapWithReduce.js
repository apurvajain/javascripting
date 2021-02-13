module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(accumlator, item, index, arr) {
        accumlator.push(fn.call(this, item, index, arr))
        return accumlator
        },[])
    }