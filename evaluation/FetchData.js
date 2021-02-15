
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

const { connect } = require('http2');
const { builtinModules } = require("module");
const fetch = require("node-fetch");

const myFunction = async function () {
    const getData = await fetch(
        `https://randomuser.me/api`
    );

    const personData = await getData.json();
        

   const name=personData.results[0].name.first
   const wealth=Math.random()*100000

   try{
       console.log("Successfully fetched")
      
   localStorage.setItem(name,parseFloat(wealth))
   }
   catch(err)
   {
       console.log(err.message)
   }
   

}

myFunction()

module.exports=myFunction
