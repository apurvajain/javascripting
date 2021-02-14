const {usePromise,iterate,alwaysThrows}=require("./AnImportantRule")

test("iterate should return x+1 when x is arg",()=>{
expect(iterate(1)).toBe(2)
})
test("alwaysThrow should throw Error 'Error('OH NOES')",()=>{
    expect(alwaysThrows).toThrow(Error("OH NOES"))
})
test("usePromise should print 1 2 3 4 5 OH NOES' with input 1",()=>{

    const consoleSpy=jest.spyOn(console,'log')
    usePromise()
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith("1")
    },0)
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith("2")
    },0)
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith("3")
    },0)
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith("4")
    },0)
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith("5")
    },0)
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith("OH NOES")
    },0)
})