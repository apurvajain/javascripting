const timer = require('./WarmUp');

test("Print TIMED OUT! after 3ms", (done) => {
    const spyOnConsole = jest.spyOn(console,'log');
    timer('TIMED OUT!');
    setTimeout(()=>{
        expect(spyOnConsole).toHaveBeenCalledWith('TIMED OUT!');
        done(); //necessary to tell jest to wait for async functions
    },300)
    
});

