const warmup = require('./warmup');
const warmup1= require('./warmup')

test( "console.log with 'TIMED OUT!' after 300ms " , () => {
    const consoleSpy = jest.spyOn(console, 'log');
    warmup1();
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith('TIMED OUT!');
        done();
    },300);
    
});
