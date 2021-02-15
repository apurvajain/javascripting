
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }



// const items = { ...localStorage };
// console.log(items)

function double(){

for (var i = 0; i < localStorage.length; i++) {

    // set iteration key name
    var key = localStorage.key(i);
  
    // use key name to retrieve the corresponding value
    var value = localStorage.getItem(key);
  
    // console.log the iteration key and value
    console.log('Key: ' + key + ', Value: ' + value);  

    console.log(localStorage.setItem(key,value*2));

    console.log("after double")

    var key = localStorage.key(i);
  
    // use key name to retrieve the corresponding value
    var value = localStorage.getItem(key);
  
    // console.log the iteration key and value
    console.log('Key: ' + key + ', Value: ' + value); 
  
  }

}
double()
