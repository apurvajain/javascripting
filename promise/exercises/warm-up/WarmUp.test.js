const warmUp = require("./WarmUp");

// Wait for all the expects to finish before you complete your test
// Use done for that

//jest doesnt inheretently handle asynchronous behaviour, wont
//wait for expect to run. hence need done, jest will wait till done
test("should print TIMED OUT! after 300ms", () => {
  const spy = jest.spyOn(console, "log");  
  warmUp();
  setTimeout(() => {
    expect(spy).toHaveBeenCalledWith("TIMED OUT!");
    //expect().toNotHaveBeenCalled
    //done(); 
  }, 400);
}); 