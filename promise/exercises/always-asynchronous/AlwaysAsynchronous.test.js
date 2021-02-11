const  {promise} = require('./AlwaysAsynchronous')

test("promise should resolve with a value PROMISE VALUE!", () => {
    expect(promise).resolves.toEqual('PROMISE VALUE');
  });


  