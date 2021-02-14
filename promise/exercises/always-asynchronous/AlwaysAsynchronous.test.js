const execute=require("./AlwaysAsynchronous")
test("Promise should resolve with a value of ",(done)=>
{

    const consoleSpy=jest.spyOn(console, "log");

    execute();
    setTimeout(()=>{
    expect(consoleSpy).toHaveBeenCalledWith("MAIN PROGRAM")})
        done();
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith("PROMISE VALUE")
        done();
    })
})

