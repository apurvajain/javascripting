// code that did not get pushed
const fetch = require("node-fetch");

var LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");
const user = []
var cnt = 0;
function getUserData() {
  fetch(`https://randomuser.me/api`)
    .then(function (response) {
      return response.json();
    })
    .then(function (userData) {
      let obj = [];
      obj.push(userData.results[0].name.first + " " + userData.results[0].name.first);
      obj.push(Math.floor(Math.random() * ((Math.random() * 10) > 5 ? 10 ** 6 : 10 ** 5)));
      user.push(obj);
      let key = localStorage.getItem(0);
      key++;
      localStorage.setItem(key, JSON.stringify(obj));
      localStorage.setItem(0, key);
    })
}



function get3user() {
  let i = 0;
  while (i < 3) {
    getUserData();
    console.log(localStorage.getItem(i + 1))
    i++;
  }

}
function newData() {
  getUserData();
  const start = localStorage.getItem(0);
  let i = 0;
  while (start > i) {
    console.log(localStorage.getItem(i));
    i++;
  }
}
function doubleWealth() {
  const endPoint = localStorage.getItem(0);
  let doubling;
  for (let start = 1; start <= endPoint; i++) {
    console.log(1);
    doubling = localStorage.getItem(start);
    doubling[1] *= 2;
    localStorage.setItem(start, doubling)
    console.log(localStorage.getItem(start));
  }
}


module.exports = { getUserData, get3user, newData, doubleWealth };