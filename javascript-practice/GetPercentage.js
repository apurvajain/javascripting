
var findPercentage= function(total){
    return function(portion){
        return function(input){
        return `${input}'s ${portion}% portion is: `+ input*(portion/total)
    }
    }
}

var findXPercent = findPercentage(100)
var find25Percent = findXPercent(25)
var find50Percent = findXPercent(50)
var find75Percent = findXPercent(75)

console.log(find50Percent(800));