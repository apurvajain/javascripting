const {promise,usePromise}=require("./AlwaysAsynchronous")

test("promise should resolve with PROMISE VALUE",()=>{
    expect(promise).resolves.toEqual("PROMISE VALUE")
})

test("MAIN PROGRAM before PROMISE VALUE on console",()=>{
    const consoleSpy=jest.spyOn(console,'log')
    setTimeout(() => expect(consoleSpy).toHaveBeenCalledWith("MAIN PROGRAM"), 0);
  setTimeout(() => expect(consoleSpy).toHaveBeenCalledWith("PROMISE VALUE"), 0);
})