function checkUsersValid(goodUsers) {

  return function allUsersValid(submittedUsers) {
    
    return submittedUsers.every(function(eUser){
      return goodUsers.some(function(sUser){
        return sUser.id==eUser.id
      })
    })
    
  };
}

module.exports = checkUsersValid