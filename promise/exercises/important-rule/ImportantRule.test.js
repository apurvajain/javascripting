const { alwaysThrows, iterate, executePromise } = require('./ImportantRule');

test("alwaysThrow should throw Error 'Error('OH NOES')' ",() => {
    expect(alwaysThrows).toThrow(Error('OH NOES'));
})

test("iterate should return i+1 for number i input ' ",() => {
    expect(iterate(1)).toBe(2);
    expect(iterate(10)).toBe(11);
})
test("iterate should print arguement i on console' ",() => {
    const consoleSpy = jest.spyOn(console,"log");
    iterate(10);
    expect(consoleSpy).toHaveBeenCalledWith(10);
})

test("executePromise should print 1 2 3 4 5 OH NOES' with input 1 ",(done) => {
    const consoleSpy = jest.spyOn(console,"log");
    executePromise();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith(1);
        expect(consoleSpy).toHaveBeenCalledWith(2);
        expect(consoleSpy).toHaveBeenCalledWith(3);
        expect(consoleSpy).toHaveBeenCalledWith(4);
        expect(consoleSpy).toHaveBeenCalledWith(5);
        expect(consoleSpy).toHaveBeenCalledWith('OH NOES');
        done();
    }, 300);
    
})

