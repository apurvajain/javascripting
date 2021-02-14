const {
    promise,
    attachTitle,
    display
}=require('./values_promises');

test("should append 'DR. ' with ' MANHATTAN",()=>{
    const str=attachTitle('MANHATTAN');
    expect(str).toBe('DR. MANHATTAN');
})

test(" promise should resolve with value “MANHATTAN” ",()=>{
    expect(promise).resolves.toBe("MANHATTAN");
})

test(" should print out “DR. MANHATTAN” ",(done)=>{
    var consoleSpy=jest.spyOn(console,'log');
    display();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('DR. MANHATTAN');
        done();
    }, 300);
})