const {
    execute,
    onFulfilled
} = require('./PromiseAfterPromise');


test("promise resolves with message 'RESOLVED' on console",(done)=>{
    var consoleSpy = jest.spyOn(console,'log');
    execute();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('RESOLVED');
        done();
    }, 500);
});