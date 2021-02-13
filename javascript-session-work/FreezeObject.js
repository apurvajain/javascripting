var obj={
    name:'srishti',
    address:{
        place:{
        city:"blr",
        state:"karnataka"
        },
        pincode:560019
    }
}

//nested properties can be changed even after freeze
Object.freeze(obj)
obj.name='rathi'
obj.address.place.city='mysore'
console.log(obj)

function deepFreeze(obj){
    if (typeof(obj)!=='object') return;
    Object.values(obj).forEach(function (value){
        deepFreeze(value)
    });
    Object.freeze(obj);
}

deepFreeze(obj)

//before deepfreeze
console.log("before deepfreeze: ")
console.log(obj)
deepFreeze(obj)
//after deepfreeze
console.log("after deepfreeze: ")
obj.name='dolly'
obj.address.place.city='shimoga'
console.log(obj)