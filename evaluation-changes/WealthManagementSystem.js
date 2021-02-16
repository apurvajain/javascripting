const fetch = require("node-fetch");

function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  

function fetchUser(url) {
    let randomWealth = randomNumber(80000, 2000000);
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            let userDetails=[];
            let eachUserDetail={};
            const fullName=data.results[0].name.first+" "+data.results[0].name.last;
            eachUserDetail.fullname=fullName;
            eachUserDetail.wealth=randomWealth;
            userDetails.push(eachUserDetail);
            //storeUserDetails(userDetails);
            return eachUserDetail;
        })
        .catch((error)=> {
            //console.log("hi")
            console.log(error)
        })
}

//fetchUser("https://randomuser.me/api");
module.exports={fetchUser}