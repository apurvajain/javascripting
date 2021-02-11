const {
    iterate,
    executePromise,
    alwaysThrows
} = require('./ImportantRule');


test("Should log 'OH NOES' to console", (done) => {
    const consoleSpy = jest.spyOn(console, "log");
    executePromise();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith("OH NOES");
        done();
    }, 300);
})