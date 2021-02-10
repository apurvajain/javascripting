const fetch = require("node-fetch");

function getCountryAndNeighbour(country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function (response) {
      return response.json(); //returns a promise
    })
    .then(function (countryData) {
      console.log(`<--------${country} country: START-------->`);
      console.log(countryData);
      console.log(`<---------${country} country: END--------->`);

      const neighbour = countryData[0].borders[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    }) //fetch returns a promise
    .then((response) => response.json())   //converts to json and returns a promise
    .then((neighbourData) => {
      console.log(`<--------${country} neighbour: START-------->`);
      console.log(neighbourData);
      console.log(`<---------${country} neighbour: END--------->`);
    });
}

getCountryAndNeighbour("portugal");