const {executePromise}=require('./PromiseAfterPromise');

test("Should log 'RESOLVED FIRST' to the console",(done)=>{
    const consoleSpy = jest.spyOn(console, "log");
    executePromise();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('RESOLVED FIRST');
        done()
    }, 300)
})