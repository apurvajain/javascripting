//5

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
          return submittedUsers.every(function(user){
                return  goodUsers.some(function(guser){
                    return guser.id === user.id; 
                });
          });
    };
}

module.exports = checkUsersValid