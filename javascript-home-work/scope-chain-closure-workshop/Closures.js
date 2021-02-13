
function foo(){
    var bar=0;
    quux=3;
    function zip(){
        bar=true
        var quux=4;
    }
    return zip;
}