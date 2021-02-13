
const {
    parsePromised,
    usePromise
}=require("./ThrowAnError");


test('Promise should be rejected to "ERROR"', () => {
    expect(parsePromised).rejects.toBe('Unexpected token u in JSON at position 0');
});

test("Should log 'Unexpected token u in JSON at position 0' on the console",(done)=>{
    const consoleSpy = jest.spyOn(console, "log");
    usePromise();
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith('Unexpected token u in JSON at position 0');
        done();
    },300)
})


