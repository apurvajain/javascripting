const {
    promise,
    display
} = require("./always_async");

test("promise should resolve with a value PROMISE VALUE!", () => {
    expect(promise).resolves.toEqual('PROMISE VALUE');
});

test("promise resolved value (PROMISE VALUE) should be printed to console along with MAIN PROGRAM", (done) => {
    const consoleSpy = jest.spyOn(console, "log");
    display();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith("PROMISE VALUE");
        expect(consoleSpy).toHaveBeenCalledWith("MAIN PROGRAM");
        done();
    }, 300);
});