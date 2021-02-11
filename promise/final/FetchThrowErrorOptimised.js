const fetch = require("node-fetch");

function returnResponse(response, message) {
    if (!response.ok) {
        throw new Error(`${message} ${response.status}`);
      }
      return response.json();
}

function getCountryAndNeighbour(country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function (response) {
     return returnResponse(response, "Country not found")
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
        return returnResponse(response, "Neighbour country not found")
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