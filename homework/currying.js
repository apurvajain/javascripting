var findPercent = function(total) {
    return function(portion) {
        return function(input){
        return `${portion}% of${input} is ${(portion  / total) * input}`;
        }
    };
}

var find100percent = findPercent(100);
var find25percent = find100percent(25)
var find75percent = find100percent(75)
var find50percent = find100percent(50)


console.log(find50percent(800))

