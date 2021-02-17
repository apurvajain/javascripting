const APIfetch = require("./API");
const fetch = require('node-fetch');
const { Response } = jest.requireActual('node-fetch');
jest.mock('node-fetch', () => jest.fn());


test("Get should be called once and it should tell the number of users",async () => { 
    const firstname = 'Megh', lastname = 'K';
    let user = JSON.stringify({ results: [{ name: {first:firstname, last:lastname}}] });
    fetch.mockReturnValue(Promise.resolve(new Response(user)));
    const userDetails = await APIfetch.GET(1);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`https://randomuser.me/api?results=1`);
    expect(userDetails.results.length).toBe(1); 
    fetch.mockClear();
})

test("Should log the total wealth of users", () => { 
    const consoleSpy = jest.spyOn(console, 'log');
    APIfetch.totalWealth();
    expect(consoleSpy).toHaveBeenCalledWith('Total wealth of users : 0');
})

