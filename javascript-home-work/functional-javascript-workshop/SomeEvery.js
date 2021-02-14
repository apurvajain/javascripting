function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
      return submittedUsers.every((sUser) => {
            return goodUsers.some((gUser) =>  gUser.id === sUser.id)
       })
  }
}
  
  module.exports = checkUsersValid
