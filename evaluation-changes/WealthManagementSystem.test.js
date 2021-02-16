const{fetchUser, clearUserDetails, displayUsers, doubleMoney, showMillionaires, sortByRichest}= require("./WealthManagementSystem");

test('can call fetchUser', () => {
    fetchUser("url");
})
//to edit test for fetch call

test('can call clearUserDetails', () => {
    clearUserDetails();
})
//to edit test for clear

test('can call displayUsers', () => {
    displayUsers();
})
//to edit test for display

test('can call doubleMoney', () => {
    doubleMoney();
})
//to edit test for doubling money

test("can display millionaires", (done) => {
    const consoleSpy = jest.spyOn(console, "log");
    showMillionaires();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalled();
        done();
    }, 3000);    
});
////to edit test for finding millionaires

test("can sort users by wealth", (done) => {
    const consoleSpy = jest.spyOn(console, "log")
    sortByRichest();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalled();
        done();
    }, 3000);    
});
