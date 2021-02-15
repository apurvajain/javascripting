const { expect, test } = require("@jest/globals");
const { fetchUsers, users } = require("./InitialUserFetch");

test("Length of users should be 3", (done) => {
  fetchUsers(3);
  setTimeout(() => {
    expect(users).toHaveLength(3);
    done();
  }, 3000);
});

test("Users should be of object data type and have a name property", (done) => {
  const spyOnConsole = jest.spyOn(console, "log");
  fetchUsers(3);
  console.log(typeof users[0]);
  setTimeout(() => {
    expect(spyOnConsole).toHaveBeenCalledWith("object");
    expect(users[0][0]).toHaveProperty("name");
    done();
  }, 3000);
});

