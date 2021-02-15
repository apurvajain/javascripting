const {LocalStorage}= require('./node_modules/node-localstorage')  

// constructor function to create a storage directory inside our project for all our localStorage setItem.
var localStorage = new LocalStorage('./evaluation'); 

//Setting localStorage Item
// localStorage.setItem('Name', 'Manish Mandal',) 
// localStorage.setItem('Name', 'Shreya')
// localStorage.setItem('Name', 'nalini')  