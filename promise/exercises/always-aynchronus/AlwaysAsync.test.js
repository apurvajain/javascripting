const { promise, executePromise } = require('./AlwaysAsync');

test("Print 'MAIN PROGRAM' before 'PROMISE VALUE'", () => {
    const consoleSpy = jest.spyOn(console, "log");
    executePromise();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('MAIN PROGRAM');

    }, 300)
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('PROMISE VALUE');

    }, 300)
})