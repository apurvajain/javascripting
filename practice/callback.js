let x=function(){
    console.log("hii in x")
}

let y= function(callback){
    console.log('hii in y')
    callback()
}

y(x)