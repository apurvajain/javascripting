const { promise, attachTitle, executePromise } = require('./ValuesAndPromises');


test("Should append 'MANHATTAN' to 'DR. ' and return result", () => {
    const received = attachTitle('MANHATTAN');
    expect(received).toBe('DR. MANHATTAN');
})

test("Promise should resolve with value 'MANHATTAN'", () => {
    expect(promise).resolves.toBe('MANHATTAN');
})

test("Should print 'DR. MANHATTAN' to the console", (done) => {
    const consoleSpy = jest.spyOn(console, "log");
    executePromise();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('DR. MANHATTAN');
        done();
    }, 300)
})