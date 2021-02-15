var NodeLocalStorage = require("node-localstorage").LocalStorage,
localStorage = new NodeLocalStorage("./store");
const fetch = require("node-fetch");


const users = [];
const fetchData = () => {
 
  for (let i = 0; i < 3; i++) {
    
    fetch("https://randomuser.me/api")
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        users.push(jsonResponse["results"]);
        
          localStorage.setItem("users",JSON.stringify(users));
          console.log(localStorage.getItem("users"));
      
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
};


fetchData();


module.exports = { fetchData, users };