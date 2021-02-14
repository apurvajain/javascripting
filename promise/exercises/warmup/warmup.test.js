const warmup = require('./warmup');


test( "console.log with 'TIMED OUT!' after 300ms " , () => {
    const consoleSpy = jest.spyOn(console, 'log');
    warmup();
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith('TIMED OUT!');
        done();
    },300);
    
});
