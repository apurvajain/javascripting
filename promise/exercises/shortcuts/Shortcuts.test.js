const {promiseResolved,promiseRejected,executePromise}=require('./Shortcuts');

test("Promise 1 should be resolved to 'RESOLVED!'",()=>{
    expect(promiseResolved).resolves.toBe("IT IS RESOLVED!");
})

test("Promise 2 should be resolved to error object'",()=>{
    expect(promiseRejected).rejects.toEqual(new Error('IT IS REJECTED!'));
})

test("Should print 'REJECTED!' to the console",()=>{
    const consoleSpy = jest.spyOn(console, "log");
    executePromise();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('REJECTED!');

    }, 300)
})
