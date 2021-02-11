const all=require('./MultiplePromises');



test("Should log ['Promise1','Promise2'] to the console",(done)=>{
    const consoleSpy = jest.spyOn(console, "log");
    all(getPromise1(),getPromise2()).then(console.log);
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith(['Promise1','Promise2']);
        done()
    }, 300)
})
