const { promise, executePromise } = require('./AlwaysAsynch');

test("'MAIN PROGRAM' to be printed before 'PROMISE VALUE'", () => {
    const consoleSpy = jest.spyOn(console, "log");
    executePromise();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('MAIN PROGRAM');

    }, 300)
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('PROMISE VALUE');

    }, 300)
})