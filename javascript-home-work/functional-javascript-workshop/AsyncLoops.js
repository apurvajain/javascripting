function loadUsers(userIds, load, done) {
    var users = [];
    var count=0;
    userIds.forEach((userId,index) => {
        load(userId,(user)=>{
            users[index]=user;
            count++;
            if(count===userIds.length){
                return done(users);
            }
        })
        
    });
  }
  
  module.exports = loadUsers