function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
          return submittedUsers.every(function(user){
                return  goodUsers.some(function(gouser){
                    return gouser.id === user.id; 
                });
          });
    };
}

module.exports = checkUsersValid