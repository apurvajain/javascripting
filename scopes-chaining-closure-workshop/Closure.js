function foo() {
    var bar=true;
    quxx=10;
    function zip(){
        var quux=20;
        console.log(bar);
        return quux;
    };
    return zip;
    
};

var fooContainer=foo();
console.log(typeof(fooContainer));
fooContainer();
console.log(fooContainer())

