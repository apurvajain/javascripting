// function implementDeepFreeze(object){
//     Object.freeze(object);
//     objectValues=Object.values(object);
//     for(let i=0;i<objectValues.length;i++){
//         if(typeof(objectValues[i])==="object"){
//             implementDeepFreeze(objectValues[i]);
//         }
//     }
//     return object;
// }


function deepFreeze(obj){
    if(typeof(obj)!=="object"){
        return;
    }
    //console.log(Object.values(obj));
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

//const freezedObject=implementDeepFreeze(obj);
const freezedObject=deepFreeze(obj);
freezedObject.address.place.city="Panjim"
console.log(freezedObject)


