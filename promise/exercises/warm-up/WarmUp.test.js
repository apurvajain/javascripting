
const warmup = require("./WarmUp");



test("should print 'Timed out' after 300ms", (done) => {
    const consoleSpy = jest.spyOn(console, 'log')
    warmup();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith("TIMED OUT!");
        done();
    }, 300);    
});
