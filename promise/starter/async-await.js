const fetch = require("node-fetch");

const whereAmI = async function (country) {
  const countryRes = await fetch(
    `https://restcountries.eu/rest/v2/name/${country}`
  );

  const countryData = await countryRes.json();

  console.log(`<--------${country} country: START-------->`);
  console.log(countryData);
  console.log(`<---------${country} country: END--------->`);

  const neighbour = countryData[0].borders[0];
  if (!neighbour) return;
  const neighbourRes = await fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);

  const neighbourData = await neighbourRes.json();

  console.log(`<--------${country} neighbour: START-------->`);
  console.log(neighbourData);
  console.log(`<---------${country} neighbour: END--------->`);
};
whereAmI("portugal");
console.log("testing async await");
