const obj = {
    name : "Bob",
    address: {
        place: {
            city: 'Sagar'
        },
        zip: 470002
    }
};



// function freeze(obj) {
//     const val = Object.values(obj);
//    Object.freeze(obj);
//    for (i in val){
//        if(typeof(val[i]) === 'object'){
//            freeze(val[i])
//        }
          
//    }
// }

function freeze(obj) {
if( typeof obj !== 'object' ) return;
   Object.values(obj).forEach(freeze)
   Object.freeze(obj);
   
}

console.log(obj.name)
obj.name = "pushya"
console.log(obj.name)
freeze(obj)
obj.name = "pushya"
console.log(obj.name)