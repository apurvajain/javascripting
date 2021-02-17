const fetch = require('node-fetch');
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./usersData');

var usersDataOnDisk = JSON.parse(localStorage.getItem('users'))

if(!usersDataOnDisk){
    usersDataOnDisk = []
}

/**
 * Local storage methods
 * 1.updateUserDataOnDisk : update the file written on the disk with the updated data
 * 2.resetUserData : clear the local storage data written on the disk
 */

function updateUserDataOnDisk(){
    localStorage.setItem('users', JSON.stringify(usersDataOnDisk))
}

function resetUserData(){
    localStorage.clear()
}


/**
 * API Methods
 * 1.GET : HTTP GET request sent to the API awaiting for the JSON response and returned as a pending promise
 */

async function GET(numOfResponses){
    const apiBaseUrl = `https://randomuser.me/api?results=${numOfResponses}`
    const apiResponse = await fetch(apiBaseUrl)
    const jsonResponse = await apiResponse.json()
    return jsonResponse
}

/**
 * Helpers:
 * 1.logUserList : Prints user data in a formatted way
 * Operations:
 * 1.fetchAndUpdateList : Resolves the promise to fetch user data from the API and updates the list and writes to the disk
 * 2.doubleWealth: used to double the wealth of the users
 * 3.fetchMillionaires : used to display the users with wealth over a million
 * 4.totalWealth : Prints the total wealth of all users put together
 * 5.sortByWealth : Sorts the users based on their wealth and displays the sorted list of users
 */

function logUserList(users = usersDataOnDisk){ 
    if(users.length){
        console.log('<--------User details: Start-------->')
        users.forEach(user => {
            console.log(`Name: ${user.name.title + ' ' + user.name.first + ' ' + user.name.last}, Wealth: ${user.wealth}`)
        });
        console.log('<--------User details: End-------->')
    } else {
        console.log('User data not available')
    }
}

function fetchUserDataAndUpdateList(numOfRequests){
    GET(numOfRequests)
    .then(function(jsonResponse){
        return jsonResponse.results
    })
    .then(function(filteredJsonResponse){
        filteredJsonResponse.map(function(user){
            user.wealth = Math.random() * 1000000
            return user
        })
        usersDataOnDisk = usersDataOnDisk.concat(filteredJsonResponse)
        updateUserDataOnDisk()
    })
    .catch(function(err){
        console.log(err)
    })
}


module.exports = {
    fetchUserDataAndUpdateList,
    logUserList,
    resetUserData
}