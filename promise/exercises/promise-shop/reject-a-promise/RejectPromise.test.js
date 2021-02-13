const {promise,rejectPromise}=require("./RejectPromise")

test("promise should reject with message 'REJECTED' ",()=>{

    expect(promise).rejects.toThrow(new Error("REJECTED!"))

})

test("promise should reject with message 'REJECTED' after 300ms",(done)=>{
    const consoleSpy=jest.spyOn(console,'log')
    setTimeout(()=>{
        rejectPromise()
        expect(consoleSpy).toHaveBeenCalledWith("REJECTED!")
        done()
    },300)
    
})