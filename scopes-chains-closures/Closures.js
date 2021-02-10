function foo()
{
    quux=1;
    var bar;
    function zip()
    {
        bar=true;
        var quux=2;
    }
    return zip;
}