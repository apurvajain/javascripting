//import module
const {LocalStorage}= require ('./node_modules/node-localstorage')

// constructor function to retrieve localStorage Items from the previously declared directory.
var localStorage = new LocalStorage('./evaluation');

//console.log localStorage item with the key Name
//console.log(localStorage.getItem('Name'))