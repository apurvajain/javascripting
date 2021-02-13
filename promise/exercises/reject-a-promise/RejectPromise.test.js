const {
    promise,
    onReject 
  } = require("./RejectPromise");
  test("Should reject the promise with Error object",(done)=>{
    const errorObj={
        message:"REJECTED!"
    }
    expect(promise).rejects.toEqual(errorObj);
    done()

})
test("Should reject with (REJECTED!) printed to console", (done) => {
    const consoleSpy = jest.spyOn(console, "log");
    promise.then(()=>{

    },onReject)
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith("REJECTED!");
        done();
    }, 300);
});