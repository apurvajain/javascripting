function foo() {
    var bar = 1
    quux = 2
    function zip() {
        bar=true
        var quux = 1
    }
    return zip;
}