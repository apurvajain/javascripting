const fetch = require("node-fetch");

var LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch1");
let user=[];
// localStorage.setItem("users", JSON.stringify(user))
var cnt = 0;
function getUserData() {
  return fetch(`https://randomuser.me/api`)
    .then(function (response) {
      return response.json();
    })
    .then(function (userData) {
      user= JSON.parse(localStorage.getItem("users")) ;
      let obj = {};
      obj["fullName"] = (userData.results[0].name.first + " " + userData.results[0].name.last);
      obj["wealth"] = (Math.floor(Math.random() * ((Math.random() * 10) > 5 ? 10 ** 7 : 10 ** 8)));
      user.push(obj);
      localStorage.setItem("users", JSON.stringify(user));    
      return user
    })

}
async function fetchNewUsers(noOfUsers){
    let users;
    while(noOfUsers-->0)
     users= await getUserData();
     for(obj in users){
      console.log("FullName: "+users[obj]["fullName"]+"\tWealth: "+users[obj]["wealth"]);
    }
}

module.exports={
    fetchNewUsers,
    user
}
