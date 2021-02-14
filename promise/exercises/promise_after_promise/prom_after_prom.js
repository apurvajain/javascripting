var f=first();
var s=f.then(val,()=>{
    return f.then(res);
})


function onFulfilled(){
    s.then((res)=>console.log(res));
}

onFulfilled();

module.exports={
    onFulfilled
}