const {promise,
    attachTitle,
    executePromise}=require('./ValueAndPromise');

test("Should prepend 'DR. ' to argument 'NAME' and return result", () => {
    expect(attachTitle('Strange')).toEqual('DR. Strange');
    })
    
test("Promise should resolve with value 'MANHATTAN'", () => {
    expect(promise).resolves.toBe('MANHATTAN');
    })
    
test("Should log 'MANHATTAN' to the console",(done)=>{
    const consoleSpy = jest.spyOn(console, "log");
    executePromise();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('DR. MANHATTAN');
        done()
    }, 300)
})