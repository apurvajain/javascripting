const {promise,onReject}=require("./RejectPromise");

test("Should reject the promise with ERROR object",(done)=>{
    expect(promise).rejects.toEqual(new Error('REJECTED!'));
    done()

})

test("Should reject value (REJECTED!) should be printed to console", (done) => {
    const consoleSpy = jest.spyOn(console, "log");
    promise.then(()=>{},onReject)
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith("REJECTED!");
        done();
    }, 300);
});