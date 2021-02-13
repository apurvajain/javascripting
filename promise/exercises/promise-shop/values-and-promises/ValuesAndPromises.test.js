const usePromise=require("./ValuesAndPromises")

test("Should print 'DR. MANHATTAN' to the console",()=>{
    const consoleSpy=jest.spyOn(console,'log')
    setTimeout(()=>{
        expect(consoleSpy).toHaveBeenCalledWith("DR. MANHATTAN")
    },0)
})