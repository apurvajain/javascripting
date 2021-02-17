const { TestScheduler } = require('jest')
const fileOps = require('./FetchUser.js')
test("Number of users in local storage should be 3", () =>{
    
    expect(fileOps.fetchUser(3)).toHaveLength(3)
})

test("Should")