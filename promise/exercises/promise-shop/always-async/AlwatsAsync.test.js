const execute= require("./AlwatsAsync")

test('should log "MAIN PROGRAM" before "PROMISE VALUE"', (done)=>{
    const consoleSpy = jest.spyOn(console, "log");
    execute();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('MAIN PROGRAM');
        done();
    })
    setTimeout(() => {
                expect(consoleSpy).toHaveBeenCalledWith('PROMISE VALUE');

        done();
    })
})