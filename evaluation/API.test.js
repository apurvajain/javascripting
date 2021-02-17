const APIfetch = require("./API");
const fetch = require('node-fetch');
const { Response } = jest.requireActual('node-fetch');
jest.mock('node-fetch');


test("Get should be called once and it should return user details",async () => { 
    const firstname = 'Megh', lastname = 'K';
    let user = JSON.stringify({ results: [{ name: {first:firstname, last:lastname}}] });
    fetch.mockReturnValue(Promise.resolve(new Response(user)));
    const userDetails = await APIfetch.GET(1);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`https://randomuser.me/api?results=1`);
    //expect(userDetails.name).to(`${firstname}  ${lastname}`); 
    fetch.mockClear();
})



