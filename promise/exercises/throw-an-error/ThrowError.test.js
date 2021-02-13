const {
    parsePromised,
    executePromise
}=require('./ThrowError');


test('Promise should reject to "ERROR"', () => {
    expect(parsePromised('{"obj":{"a":10}')).rejects.toEqual(
    expect.objectContaining({
      message: "Unexpected end of JSON input",
    })
  );
    //expect(parsePromised).rejects.toBe(new Error('Unexpected token u in JSON at position 0'));
});

test("Should display 'Unexpected end of JSON'",(done)=>{
    const consoleSpy = jest.spyOn(console, "log");
    executePromise();
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith('Unexpected end of JSON input');
        done();
    },300)
})