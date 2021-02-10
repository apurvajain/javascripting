const { promise, attachTitle, executePromise } = require('./ValuesPromises');


test("Should prepend 'DR. ' to first argument and return result", () => {
    const received = attachTitle('Anukriti');
    expect(received).toBe('DR. Anukriti');
})

test("Promise should resolve with value 'MANHATTAN'", () => {
    expect(promise).resolves.toBe('MANHATTN');
})

test("Should print 'DR. MANHATTAN' to the console", () => {
    const consoleSpy = jest.spyOn(console, "log");
    executePromise();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('DR. MANHATTAN');

    }, 300)
})