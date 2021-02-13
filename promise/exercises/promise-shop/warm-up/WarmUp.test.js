const warmUp = require("./WarmUp")
const WarmUp=require("./WarmUp")

test("should return 'TIMED OUT!' after 300ms",(done)=>{
    const spyConsole=jest.spyOn(console,'log')
    warmUp()
    setTimeout(()=>{
        expect(spyConsole).toHaveBeenCalledWith("TIMED OUT!")
        done()
    },300)
   
})