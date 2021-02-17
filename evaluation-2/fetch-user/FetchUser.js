const fetch =  require("node-fetch");
var LOcalStorage = require("node-localstorage").LocalStorage;
localStorage = new LOcalStorage("./scratch");

const users = [];
function fetchUser(userCount) {

    for( let initialCount=0; initialCount<userCount;initialCount++){
        fetch('https://randomuser.me/api')
        .then((response) => {
            return response.json();
        })

        .then((data) => {
           // console.log(data.results[0].name);
            var userNameWealth={};
            userNameWealth["name"]=data.results[0].name.title+"" +data.results[0].name.first + " " +data.results[0].name.last;
            userNameWealth["wealth"]=Math.floor(Math.random()*100000000+10000);
            users.push(userNameWealth);
            localStorage.setItem("users", JSON.stringify(users))
            return users;

        }).catch((err) => {
            console.log("error");
        });

    }

}
function addAndDisplay()
{
    fetchUser(1);
    const userList=JSON.parse(localStorage.getItem("users"))

    userList.forEach((user) => {
        console.log(user)});
}


function doubleMoney() {
    const userList=JSON.parse(localStorage.getItem("users"))
    let doubledMoney = userList.map((user) => {
        return ({
            name: userList.name,
            wealth: user.wealth *2
        })
        localStorage.setItem("users", JSON.stringify(doubledMoney))
    })
}
 fetchUser(3);
addAndDisplay();
doubleMoney();
module.exports={fetchUser}