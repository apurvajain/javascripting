const {
    promise,
    execute
} = require('./AlwaysAsync');

test("promise should resolve with a value 'PROMISE VALUE' ", () => {

    expect(promise).resolves.toEqual('PROMISE VALUE');
});

test("console.log should  print 'MAIN PROGRAM' to console ", () => {
    const consoleSpy = jest.spyOn(console, "log");
    execute();
    expect(consoleSpy).toHaveBeenCalledWith('MAIN PROGRAM');
});

test("promise should resolve and  print 'PROMISE VALUE' to console ", (done) => {
    const consoleSpy = jest.spyOn(console, "log");
    execute();
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith('PROMISE VALUE');
      done();
    },300);
});


