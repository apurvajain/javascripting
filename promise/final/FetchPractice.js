const fetch = require("node-fetch");

function getCountryAndNeighbour(country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (countryData) {
        console.log(countryData);
  
        const [neighbour] = countryData[0].borders;
        if (!neighbour) return;
        return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
      })
      .then((response) => response.json())
      .then((neighbourData) => {
        console.log(neighbourData);
      });
  }
  
  getCountryAndNeighbour("usa");