
var findPercent=function(num)
{
    return function(percent)
    {
        return function(percentOf)
        {
            return `${percentOf}'s ${percent} percent is:`+percentOf*(percent/num)
        }
    }
}

var findXPercent= findPercent(100)
var find25Percent=findXPercent(25)
var find50Percent=findXPercent(50)
var find75Percent=findXPercent(75)

console.log(find25Percent(200))
console.log(find50Percent(200))
console.log(find75Percent(200))
