const {
    promise,
    display,
    onReject
} = require("./reject_or_not");

test("promise should resolve with a value 'I FIRED' ", () => {
    expect(promise).resolves.toEqual('I FIRED');
});

test("promise should resolve and  print 'I FIRED' to console", (done) => {
    const consoleSpy = jest.spyOn(console, "log");
    display();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith("I FIRED");
        done();
    }, 300);
});