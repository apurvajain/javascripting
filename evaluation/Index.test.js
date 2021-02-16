const index = require("./Index");
const fetch = require('node-fetch');
const {Response} = jest.requireActual('node-fetch');



jest.mock('node-fetch');

test("fetch should be called one time and return user object with name and money  ", async () => {

   
    const firstname = 'Apoorva',lastname = 'Choudhary';
    let user = JSON.stringify({ results: [{ name: {first:firstname, last:lastname}}] } );
    fetch.mockReturnValue(Promise.resolve(new Response(user)));
    const userDetails = await index.fetchUser();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`https://randomuser.me/api`);
    expect(userDetails.name).toBe(`${firstname}  ${lastname}`);
    
});

test(" money function should return a number ", () => {
    expect(typeof index.getMoney()).toBe('number');
});

test(" money function should return a number greater than 99999 and less than 1000000000", () => {
    expect(index.getMoney()).toBeGreaterThan(99999);
    expect(index.getMoney()).toBeLessThan(1000000000);
});


