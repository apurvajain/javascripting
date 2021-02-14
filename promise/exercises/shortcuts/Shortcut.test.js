const { promise, execute} = require("./shortcuts")




test("sholud use atleast one catch and promise.reject",()=>{
    expect(promise).rejects.toEqual(Error('REJECTED'));
}
    );

test("sholud use atleast one catch and promise.reject and console.log",(done)=>{
    var consoleSpy=jest.spyOn(console,'log');
    execute()
    setTimeout(() => {
        // expect(consoleSpy).toHaveBeenCalledWith("CATCH");
        expect(consoleSpy).toHaveBeenCalledWith("REJECTED");
        done();
    }, 300);
});