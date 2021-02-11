
const  {promise} = require('./RejectPromise')

test("promise should reject with a value REJECTED", () => {
    expect(promise).resolves.toEqual('REJECTED!');
  });