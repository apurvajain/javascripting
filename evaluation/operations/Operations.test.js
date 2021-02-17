const operations = require('./Operations');
const userOps = require('../users/Users');

test('3 user objects should be saved', (done) => {
  operations.fetchUsers(3);
  setTimeout(() => {
    const retrivedUsers = userOps.getUsers();
    expect(retrivedUsers).toHaveLength(3);
    expect(retrivedUsers[0]).toHaveProperty('name');
    userOps.clearLocalStorage();
    done();
  }, 2000);
});
