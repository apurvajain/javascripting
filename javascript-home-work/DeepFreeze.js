
//Object.freeze() -  works on object values. It makes an object immutable, 
//i.e. you cannot change its properties.
const obj = {
    name : "Bob",
    address: {
        place: {
            city: 'Sagar'
        },
        zip: 470002
    }
};

// Object.freeze - shallow freezing depth level 1
// Object.freeze(obj);

//For deepFreeze - custom recursive function is created


function deepFreeze(obj){
    if(typeof obj !== 'object') return;
    Object.values(obj).forEach(deepFreeze)
    Object.freeze(obj);
}

deepFreeze(obj);
obj.address.place.city = 'lalaland';
console.log(obj);
