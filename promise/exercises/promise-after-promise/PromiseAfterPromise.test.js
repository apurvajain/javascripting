const {executePromises,first,second}=require('./PromiseAfterPromise');

test("Should log 'RESOLVED FIRST' to the console",(done)=>{
    const consoleSpy = jest.spyOn(console, "log");
    executePromises();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('RESOLVED FIRST');
        done()
    }, 300)
})