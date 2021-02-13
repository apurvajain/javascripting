const {promise,usePromise}=require("./RejectOrNotReject")

test("Promise should resolve with a value I FIRED only once and not be rejected",()=>{
    expect(promise).resolves.toEqual("I FIRED")
})

test("promise resolved value I FIRED should be printed to console ",(done)=>{
    const consoleSpy=jest.spyOn(console,'log')
    usePromise()

    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith("I FIRED")
        done()
    },0)
    
})

