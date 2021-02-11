const {rejected} = require("./Shortcut")

test("promise should reject with a value ERROR", () => {
    expect(rejected).resolves.toEqual('ERROR');
  });

test("should print 'ERROR after 300ms", () => {
    const consoleSpy = jest.spyOn(console, 'log')
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith("ERROR");
       
    }, 0);    
});