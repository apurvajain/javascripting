const {promiseResolved, executePromise} = require('./Shortcuts')

test("Promise should respond with 'SUCCESS'",()=>{
    expect(promiseResolved).resolves.toEqual("SUCCESS");
})

test("Promise reject value 'FAILED' should be printed to console",()=>{
  const consoleSpy = jest.spyOn(console, "log");
  executePromise();
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalledWith("FAILED");
  }, 0);
});
