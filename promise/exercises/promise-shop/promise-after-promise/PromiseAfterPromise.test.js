const {executePromise,first,second}=require('./PromiseAfterPromise');

test("should log 'SECRET VALUE' to the console",(done)=>{
    const consoleSpy = jest.spyOn(console, "log");
    executePromise();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('SECRET VALUE');
        done()
    })
})