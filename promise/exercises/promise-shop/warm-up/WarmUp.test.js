const WarmUp = require('./WarmUp.js')

test("should return 'TIMED OUT!' after 300ms",(done)=> {
  
    const spyConsole=jest.spyOn(console,'log')
    WarmUp()
    setTimeout(()=>{
        expect(spyConsole).toHaveBeenCalledWith('TIMED OUT!')
        done()
    },300);
    

});