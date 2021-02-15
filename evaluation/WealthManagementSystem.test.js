const {fetchUsers, doubleMoney, showMillionares, sortByRiches, totalWealth} = require("./WealthManagementSystem");


test('can call fetchUsers function', () => {
    fetchUsers();
})


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

test("can sort users by wealth with console log", (done) => {
    const consoleSpy = jest.spyOn(console, "log")
    sortByRiches()
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalled();
        done();
    }, 3000);    
});

test("can calculate  total wealth", (done) => {
    const consoleSpy = jest.spyOn(console, "log")
    totalWealth()
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalled();
        done();
    }, 3000);    
});


