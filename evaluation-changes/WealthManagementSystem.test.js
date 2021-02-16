const{fetchUser, clearUserDetails, displayUsers, doubleMoney}= require("./WealthManagementSystem");

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
