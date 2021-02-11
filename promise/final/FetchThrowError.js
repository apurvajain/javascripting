const fetch = require("node-fetch");

function getCountryAndNeighbour(country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`Country data not found ${response.status}`);
      }
      return response.json();
    })
    .then(function (countryData) {
      console.log(`<--------${country} country: START-------->`);
      console.log(countryData);
      console.log(`<---------${country} country: END--------->`);

      const neighbour = countryData[0].borders[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Neighbour country data not found ${response.status}`);
      }
      response.json();
    })
    .then((neighbourData) => {
      console.log(`<--------${country} neighbour: START-------->`);
      console.log(neighbourData);
      console.log(`<---------${country} neighbour: END--------->`);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

getCountryAndNeighbour("portugal");