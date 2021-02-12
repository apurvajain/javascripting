const httpReq =  require("./DoSomeWork");

test("promise resolved as http request", (done) => {
    const consoleSpy = jest.spyOn(console, 'log')
    httpReq();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalled();
        done();
    }, 300);    
});