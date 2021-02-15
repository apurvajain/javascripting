const { fetchUsers } = require("./WealthManagementSystem");

test("FetchUsers should push user on function call", () => {
  fetchUsers();
  const consoleSpy = jest.spyOn(console, "log");
  expect(consoleSpy).toHaveBeenCalledWith("lal");
});
