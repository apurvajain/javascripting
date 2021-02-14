function attachTitle(val){
    return "DR. "+val;
}

var promise=new Promise(function(fulfilled,reject){
    fulfilled('MANHATTAN');
})

function display()
{
    promise
    .then((res)=>console.log(attachTitle(res)))
}

display();

module.exports={
    attachTitle,
    promise,
    display
}

