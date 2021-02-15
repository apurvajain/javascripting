const fetch = require("node-fetch");

const getData=(url,err) =>{
    return fetch(url).then(function (response) {
      if (!response.ok) {
        throw new Error(` ${err} with status ${response.status}`);
      }
      return response.json();
    });
  }


function getCountryAndNeighbour(country) {
    getData(
      `https://restcountries.eu/rest/v2/name/${country}`,"you entered wrong country"
    )
      .then(function (countryData) {
        console.log(`<--------${country} country: START-------->`);
        console.log(countryData);
        console.log(`<---------${country} country: END--------->`);
  
        const neighbour = countryData[0].borders[0];
        if (!neighbour) return;
        return getData(
          `https://restcountries.eu/rest/v2/alpha/${neighbour}`,'no neighbour found'
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
  

  