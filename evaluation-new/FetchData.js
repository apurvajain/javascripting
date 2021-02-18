const fetch = require('node-fetch');

const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./scratch1');

// localStorage.setItem("users", JSON.stringify(user))
const cnt = 0;
function getUserData() {
  return fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((userData) => {
      let user = [];
      user = JSON.parse(localStorage.getItem('users'))||[];
      const obj = {};
      obj.fullName = (`${userData.results[0].name.first} ${userData.results[0].name.last}`);
      obj.wealth = (Math.floor(Math.random() * ((Math.random() * 10) > 5 ? 10 ** 7 : 10 ** 8)));
      user.push(obj);
      localStorage.setItem('users', JSON.stringify(user));
      return user;
    });
}
 const fetchNewUsers=async(noOfUsers)=> {
  let users;
  while (noOfUsers-- > 0) users = await getUserData();
  for (obj in users) {
    console.log(`FullName: ${users[obj].fullName}\tWealth: ${users[obj].wealth}`);
  }
}

module.exports = {
  fetchNewUsers,
};
