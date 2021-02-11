const fetch = require("node-fetch");

function fetchData(url, errorMsg = "Something went wrong") {
  return fetch(url).then(function (response) {
    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
}

function getCountryAndNeighbour(country) {
  fetchData(
    `https://restcountries.eu/rest/v2/name/${country}`,
    "Country data not found"
  )
    .then(function (countryData) {
      console.log(`<--------${country} country: START-------->`);
      console.log(countryData);
      console.log(`<---------${country} country: END--------->`);

      const neighbour = countryData[0].borders[0];
      if (!neighbour) return;
      return fetchData(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        "Neighbour country data not found"
      );
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

// how can we optimize this?
