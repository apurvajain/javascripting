const {fullFillaPromise, promise}= require('./FullfillaPromise');
test("promise resolve value FULFILED! should return after 300ms", (done)=>{
    const consoleSpy= jest.spyOn(console, "log");
    fullFillaPromise(promise);
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith("FULFILED!");
        done();
    }, 300)
} )