const {promise, onReject}= require('./RejectOrNot')

test('promise resolve should return "I FIRED"', ()=>{
    const consoleSpy= jest.spyOn(console, 'log');
    promise.then(console.log, onReject);
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith("I FIRED")
    })
})