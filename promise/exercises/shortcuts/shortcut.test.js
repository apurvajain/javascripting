const {
    promise,
    display
}= require("./shortcut");

test("sholud use atleast one catch and promise.reject",()=>{
    expect(promise).rejects.toEqual(Error('REJECTED!'));
}
    );

test("sholud use atleast one catch and promise.reject and console.log",(done)=>{
    var consoleSpy=jest.spyOn(console,'log');
    display();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith("error when inside then");
        expect(consoleSpy).toHaveBeenCalledWith("REJECTED!");
        done();
    }, 300);
});