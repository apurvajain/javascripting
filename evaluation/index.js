
const {local}=require( './store.js');
const {local1}=require('./usage')
const fetch = require("node-fetch");



function wealth_management(data) {
  fetch(`https://randomuser.me/${data}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (Data) {
        console.log("Welcome to the User wealth management system\n")
      console.log(`<--------User details : START-------->`);
      //for (let i=0;i<3;i++)
      console.log('Name: '+ (Data.results[0].name) +' '+"wealth: "+Math.random()*10000000);
      console.log('Name: '+ (Data.results.name)+' '+"wealth: "+Math.random()*10000000);
      console.log('Name: '+ (Data.results.name) +' '+"wealth: "+Math.random()*10000000);
      console.log('<----------User details : END------->');

      
      

      
    })
    //.then((response) => response.json())
    
}

      
  
  
function optionentry(){
    console.log("Please select option\n");
      console.log("1. Add user and print new user list\n")
      console.log("2.Double money of all users and print updated user list")
      console.log("3. Show only millionares\n")
      console.log("4. Sort by richest\n")
      console.log("5. Calculate total wealth of all users and print it")
      console.log("6. Exit\n")

      var choice = window.prompt("Enter your option: ");
      alert("You have selected option " + choice);

      switch(choice)
      {
          case 1: addnewentry();
                  wealth_management(api);
                  optionentry();
                  break;
           case 2: doublemonet();
                  wealth_management(api);
                  optionentry();
                  break;
           case 3: showmillionare();
                   wealth_management(api);
                   optionentry();
                   break;
           case 4: sorting();
                   wealth_management(api);
                   optionentry();
                   break;
           case 5: total   ();
                  displaytotal();
                  optionentry();
                  break;
           case 6: console.log("Exit"); 
           exit     (1);
           default: break;
      }              
                  
                  
      }







wealth_management("api");

optionentry();

module.exports={
    wealth_management,
    optionentry
}