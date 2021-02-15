const { TestScheduler } = require('jest')
const {
    wealth_management,
    optionentry
}=require('./index')

test ("should print default entries",(done)=>{
    var consoleSpy=jest.spyOn(console,'log');
    wealth_management();
    setTimeout(()=>
      expect(consoleSpy).toHaveBeenCalledWith("Welcome to the User wealth management system\n"),
      expect(consoleSpy).toHaveBeenCalledWith(`<--------User details : START-------->`),
      expect(consoleSpy).toHaveBeenCalledWith("Name: '+ (Data.results[0].name) +' '+"wealth: "+Math.random()*10000000"),
      expect(consoleSpy).toHaveBeenCalledWith("<----------User details : END------->")
      done();
    
    
      ),300};
        
    
})