module.exports = { fetch, fetchRandomUsers }

var fetch = require("node-fetch");

var users = []

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
} else {
    users = localStorage.getItem('users')
}

function fetchRandomUsers(numUsersToFetch) {
for(i=0; i<numUsersToFetch; i++){
fetch('https://randomuser.me/api')
.then((resp) => {
    return resp.json()
})
.then(function(jsonResponse) {
    let responseWithWealth = jsonResponse['results'][0]
    responseWithWealth['wealth'] = Math.random() * 100000   
    console.log("Name: " + responseWithWealth.name.first + responseWithWealth.name.last + " wealth: " + responseWithWealth.wealth)
    users.push(responseWithWealth)
    localStorage.setItem('users', users);
 })
}
}



fetchRandomUsers(3)

module.exports = {fetch, fetchRandomUsers}