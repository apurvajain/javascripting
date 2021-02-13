const { promise, 
    executePromise } = require('./AlwaysAsynchronous');

test("Should show 'MAIN PROGRAM' before 'PROMISE VALUE'", (done) => {
    const consoleSpy = jest.spyOn(console, "log");
    executePromise();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('MAIN PROGRAM');
        done();

    }, 300)
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('PROMISE VALUE');
        done();
    }, 300)
})