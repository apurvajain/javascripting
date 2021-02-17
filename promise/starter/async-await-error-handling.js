const fetch = require('node-fetch');

const whereAmI = async function (country) {
  try {
    const countryRes = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}`,
    );

    if (!countryRes.ok) throw new Error('Problem getting country data');

    const countryData = await countryRes.json();

    console.log(`<--------${country} country: START-------->`);
    console.log(countryData);
    console.log(`<---------${country} country: END--------->`);

    const neighbour = countryData[0].borders[0];
    if (!neighbour) return;

    const neighbourRes = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
    );

    if (!neighbourRes.ok) throw new Error('Problem getting neighbour data');

    const neighbourData = await neighbourRes.json();

    console.log(`<--------${country} neighbour: START-------->`);
    console.log(neighbourData);
    console.log(`<---------${country} neighbour: END--------->`);
  } catch (err) {
    console.log(err);
  }
};
whereAmI('portugal');
console.log('testing async await');
