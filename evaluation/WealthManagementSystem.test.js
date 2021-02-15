const {callFirst, showAllUsers} = require("./WealthManagementSystem");



// function testShowResult(value, expectValue){
//     const result = showAllUsers(value)
//     expect(result).toBe(expectValue)
// }

// test('should return', () => {
//     testShowResult(1,'1')
// })


test("should call getUserInitial", (done) => {
    const consoleSpy = jest.spyOn(console, 'log')
    callFirst();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalled("");
        done();
    }, 300);    
});
