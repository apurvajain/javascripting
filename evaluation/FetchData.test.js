const { constants } = require("buffer");
const { timeStamp } = require("console");
const { connect } = require("http2");
const { execPath } = require("process");

const myFunction=require("./FetchData")

test("it should fetch data from api",(done)=>{
    const spyConsole=jest.spyOn(console,'log')

    myFunction()
    setTimeout(()=>{
        expect(spyConsole).toHaveBeenCalledWith("Successfully fetched")
done()
    },100)

    
})