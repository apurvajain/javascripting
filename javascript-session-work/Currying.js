function calculatePercent(z)
{
return function (x){

    return function(y){
        return (x/z)*y
    }
}
}
const findPercent=calculatePercent(100)

getTwentyfive=findPercent(25)
console.log(getTwentyfive(400))

getSeventyfive=findPercent(75)
console.log(getSeventyfive(100))
getFifty=findPercent(50)
console.log(getFifty(100))