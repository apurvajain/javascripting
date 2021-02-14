// Return a function that takes a list of valid users, and returns a function 
// that returns  true if all of the supplied users exist in the original list of users.
//every some

//everything  of submitted should be something in goodUsers

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      return submittedUsers.every(function(suser){
          return goodUsers.some(function(guser){
            return guser.id === suser.id
          })
      })
    };
  }

// function checkUsersValid(goodUsers){
//   return goodUsers.
// }

  module.exports = checkUsersValid