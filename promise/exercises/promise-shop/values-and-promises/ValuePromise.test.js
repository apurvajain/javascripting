const {promise, attachTitle}= require("./ValuePromise")

test("should log DR.MANHATTAN by promise chain", (done)=>{
    const consoleSpy= jest.spyOn(console, "log");
    promise.then(attachTitle).then(console.log)
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith("DR.MANHATTAN");
        done();
    }, 300)
})