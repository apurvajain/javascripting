const {fetchNewUsers, user}= require("./FetchData")

test("Fetch the new users", ()=>{
    fetchNewUsers(3);
    setTimeout(()=>{
        expect(user.length).toHaveLength(3);
    }, 1000)
})