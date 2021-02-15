const { expect } = require("@jest/globals");
const { fetchUsers, users } = require("./GetUser");

test("Number of users should be 3", (done) => {
  fetchData();
  setTimeout(() => {
    expect(users).toHaveLength(3);
    done();
  }, 3000);
});

