const {
    promise,
    display,
    onReject
} = require("./reject_prom");

test("promise should reject with a Error object 'Error('REJECTED!')'", () => {
    expect(promise).rejects.toEqual(Error('REJECTED!'));
});

test("promise rejected value (REJECTED!) should be printed to console", (done) => {
    const consoleSpy = jest.spyOn(console, "log");
    display();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith("REJECTED!");
        done();
    }, 300);
});