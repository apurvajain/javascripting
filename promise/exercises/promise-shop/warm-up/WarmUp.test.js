const warmUp= require('./WarmUp')

test('should print TIMED OUT after 300ms', (done)=>{
    const consoleSpy=jest.spyOn(console, 'log')
    warmUp();
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith("TIMED OUT!");
       done();
    }, 300)
    
})