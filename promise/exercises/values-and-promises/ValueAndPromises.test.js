const  {promise} = require('./ValuesAndPromises')

test("promise should resolve with a value MANHATTAN", () => {
    expect(promise).resolves.toEqual('DR. MANHATTAN');
  });