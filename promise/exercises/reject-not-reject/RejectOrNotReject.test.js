const {promise,
    onReject,
    checkForResolveOrReject} = require('./RejectOrNotReject')

test('Should promise be only resolved to "I FIRED" and not rejected', (done) => {
    expect(promise).resolves.toEqual('I FIRED');
    done();
});


test("Resolved value 'I FIRED' should  print to console", (done) => {
    const consoleSpy = jest.spyOn(console, "log");
    checkForResolveOrReject();
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith('I FIRED');
        done();
    },300)
    
});