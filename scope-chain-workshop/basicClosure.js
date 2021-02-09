function foo(){  
    var bar;
    quux = 1
    return function zip(){
        bar = true;
        var quux = 2;
        return bar;
    } 
}

var getFoo = foo();
console.log(getFoo())