const {promise, onReject}= require("./RejectAPromise")

// test('promise should reject with "REJECTED! after 300ms', ()=>{
//     expect(promise).rejects.toEqual(new Error("REJECTED!"));
// })

test('promise rejects with an message "REJECTED!"', (done)=>{
    const consoleSpy= jest.spyOn(console, "log");
    onReject()
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith("REJECTED!")
        done();
    }, 300);
    
})