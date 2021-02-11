const { iterate, alwaysThrows, onReject, executePromise } = require('./AnImportantRule');

test("Should throw Error 'Error('OH NOES')' ",() => {
    expect(alwaysThrows).toThrow(Error('OH NOES'));
})

test("Iterate should return i+1 for number i input ' ",() => {
    expect(iterate(1)).toBe(2);
})
test("Iterate should print arguement i on console' ",() => {
    const consoleSpy = jest.spyOn(console,"log");
    iterate(1);
    expect(consoleSpy).toHaveBeenCalledWith(1);
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