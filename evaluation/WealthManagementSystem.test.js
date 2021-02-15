const {fetchUsers, doubleMoney} = require("./WealthManagementSystem");


test('can call fetchUsers function', () => {
    fetchUsers();
})



test("can call fetchUsers function", (done) => {
    const consoleSpy = jest.spyOn(console, "log")
    fetchUsers("https://randomuser.me/api");
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalled();
        done();
    }, 3000);    
});



test('can call double money function', () => {
    doubleMoney();
})
