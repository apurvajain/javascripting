const prom=require("./prom_after_prom");

test("should fulfill the promise and return the secret value",()=>{
    expect(prom).resolves.toEqual('RESOLVED');
}
)

test("should fulfill the promise and return the secret value",(done)=>{
    var consoleSpy = jest.spyOn(console,'log');
    prom();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('RESOLVED');
        done();
    }, 300);
})