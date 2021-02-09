var findPercentage = function(total) {
    return function(portion){
        return function(input) {
            return (input*portion/total);
        };
    }
}
findXPercent  = findPercentage(100);
find25Percent  = findXPercent(25);
find50Percent  = findXPercent(50);
console.log(find50Percent(800));



