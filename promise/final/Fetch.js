const fetch = require("node-fetch");

// The output of each then is passed to the next then
// Fetch also returns a promise
// Promises is a trigger of async behaviour

function getCountryAndNeighbour(country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (countryData) {
      console.log(countryData);
      const neighbour = countryData[0].borders[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((neighbourData) => {
      console.log(neighbourData);
    });
}

getCountryAndNeighbour("usa");
