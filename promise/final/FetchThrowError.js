const fetch = require("node-fetch");

function willThrowErrorOrNot(response) {
    if (!response.ok) {
        throw new Error(`Country data not found ${response.status}`);
      }
      return response.json()
}

function getCountryAndNeighbour(country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function (response) {
       return willThrowErrorOrNot(response)
      
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
       return willThrowErrorOrNot(response)
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