const getUserInitial = require("./WealthManagementSystem");



test("should call getUserInitial", (done) => {
    const consoleSpy = jest.spyOn(console, 'log')
    getUserInitial();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalled("");
        done();
    }, 300);    
});
