const {promiseResolved,promiseRejected,executePromise}=require('./Shortcuts');

test("Promise1 should be resolved to 'IT IS RESOLVED!'",()=>{
    expect(promiseResolved).resolves.toBe("IT IS RESOLVED!");
})

test("Promise2 should be resolved to error object'",()=>{
    expect(promiseRejected).rejects.toEqual(new Error('IT IS REJECTED!'));
})

test("Should print 'IT IS REJECTED!' to the console",()=>{
    const consoleSpy = jest.spyOn(console, "log");
    executePromise();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('IT IS REJECTED!');

    }, 300)
})



