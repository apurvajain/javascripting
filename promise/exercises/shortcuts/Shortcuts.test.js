const {
    promise,
    execute
} = require('./Shortcuts');

test("promise should reject with a Error object 'Error('REJECTED!')' ", () => {
    expect(promise).rejects.toEqual(Error('REJECTED!'));
});

test("promise rejects with console log print 'REJECTED!' in .then  ", (done) => {
    var consoleSpy = jest.spyOn(console,'log');
    execute();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('Inside then');
        expect(consoleSpy).toHaveBeenCalledWith('REJECTED!');
        done();
    }, 500);
   
});




