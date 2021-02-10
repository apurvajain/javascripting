this.x = 9;   
const module1 = {
  x: 81,
  getX: function() { 
      console.log(this);
      return this.x; }
};

console.log(module1.getX()); // 81

const retrieveX = module1.getX;
console.log(retrieveX());// undefined 

const boundGetX = retrieveX.bind(module1);
console.log(boundGetX());//81
