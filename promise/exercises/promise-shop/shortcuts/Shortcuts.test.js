const {promise,rejectPromise}=require("./Shortcuts")

test("promise should reject with REJECTED",()=>{
   
    const obj = new Error("REJECTED!");
  expect(promise).rejects.toThrow(obj);
})

test("Should print 'REJECTED!' to the console",()=>{
    const consoleSpy=jest.spyOn(console,'log');
    rejectPromise();
    setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalledWith('REJECTED!');
    }, 300)
})