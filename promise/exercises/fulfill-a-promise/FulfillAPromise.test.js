const {promise} = require('./FullfillaPromise');

test("promise should resolve with a value FULFILLED! after 300ms"),() => {
    expect(promise).resolves.toEqual("FULFILLED!");
}

test("promise resolve value FULFILED! should return after 300ms", (done)=>{
    const spy= jest.spyOn(console, "log");

   
    setTimeout(()=>{
        expect(spy).toHaveBeenCalledWith("FULFILLED!");
        done();
    }, 300)
} )
