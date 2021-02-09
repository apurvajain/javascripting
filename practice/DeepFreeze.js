//Object Freeze

//Shallow freeze will work only on non-object values. eg- string
// const obj = {name:'Swetha'};
// Object.freeze(obj);
// obj.name="HI";   //does not change value. coz frozen
// console.log(obj);

//Deep freeze : implement using recursion. Should freeze  object  values as well
const obj = {
    name: "Bob",
    address: {
      place: {
        city: "Sagar",
      },
      zip: 470002,
    },
  };
  
  function Recursion(obj) {
    if (typeof obj !== "object") return;
    Object.values(obj).forEach(Recursion);
    Object.freeze(obj);
  }
  Recursion(obj)
  obj.address.place.city = "Delhi"; //should not change. city: 'Sagar'
  console.log(obj);
  