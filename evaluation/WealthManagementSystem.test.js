const {fetchUsers, doubleMoney, showMillionares} = require("./WealthManagementSystem");


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

test("can show millionare with console log", (done) => {
    const consoleSpy = jest.spyOn(console, "log")
    showMillionares()
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalled();
        done();
    }, 3000);    
});
