function deepFreeze(obj){
    if(typeof(obj)!=="object"){
        return;
    }
    Object.values(obj).forEach(function (value){
        deepFreeze(value)
    });
    Object.freeze(obj);
    return obj;
}

const obj={
    name:"Bob",
    address:{
        place:{
            city:"Sagar"
        },
        zip:470002
    }
};

const freezedObject=deepFreeze(obj);
freezedObject.address.place.city="Panjim"
console.log(freezedObject)