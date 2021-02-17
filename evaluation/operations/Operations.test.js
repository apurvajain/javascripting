const operations = require('./Operations');
const userOps = require('../users/Users');

test('3 user objects should be saved', (done) => {
  operations.fetchUsers(3).then((message) => {
    expect(message).toBe('Users fetched and saved successfully');
    const retrivedUsers = userOps.getUsers();
    expect(retrivedUsers).toHaveLength(3);
    expect(retrivedUsers[0]).toHaveProperty('name');
    expect(retrivedUsers[0]).toHaveProperty('wealth');
    userOps.clearLocalStorage();
    done();
  });
});
