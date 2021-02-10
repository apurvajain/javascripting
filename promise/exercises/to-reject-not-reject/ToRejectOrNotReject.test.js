const {promise,onReject,checkResolveOrReject} = require('./ToRejectOrNotReject')

test('Promise should be only resolved to "I FIRED" and not rejected', () => {
    expect(promise).resolves.toEqual('I FIRED');
});


test("Resolved value(I FIRED) should be printed to console", (done) => {
    const consoleSpy = jest.spyOn(console, "log");
    checkResolveOrReject();
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith('I FIRED');
        done();
    },300)
    
});