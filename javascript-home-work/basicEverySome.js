function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(uid){
            return goodUsers.includes(uid)
        });
    };
  }

  module.exports = checkUsersValid;