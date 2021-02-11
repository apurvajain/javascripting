
const  {promise} = require('./RejectOrNotToReject')

test("promise should fullfill with a value I FIRED", () => {
    expect(promise).resolves.toEqual('I FIRED');
  });
