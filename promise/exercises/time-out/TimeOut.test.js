const timeOut = require('./TimeOut');

test("should print 'Timed Out!' after 300ms", (done) => {
  const consoleSpy = jest.spyOn(console,'log')
  timeOut();
  setTimeout(()=>{
    expect(consoleSpy).toHaveBeenCalledWith("TIMED OUT!")
    done();
},100)

});