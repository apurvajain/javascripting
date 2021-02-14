const {
    parsedPromised,
    display
  
  } = require('./throwerror');
  
  
  test("Promise should reject with value 'Unexpected token u in JSON at position 0' ", () => {
  
      expect(parsedPromised()).rejects.toEqual('Unexpected token u in JSON at position 0');
  })
  
  test("Should print 'Unexpected token u in JSON at position 0' to the console", (done) => {
    const consoleSpy = jest.spyOn(console, "log");
    display();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('Unexpected token u in JSON at position 0');
        done();
    }, 300)
  })