const https = require("https");

function httpRequest(url) {
  return new Promise(function (resolve, reject) {
    https
      .get(url, (resp) => {
        let data = "";

        // A chunk of data has been received.
        resp.on("data", (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          resolve(JSON.parse(data));
        });
      })
      .on("error", (err) => {
        console.log("Error: " + err.message);
        reject(err);
      });
  });
}

function getCountryAndNeighbour(country) {
  httpRequest(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((countryData) => {
      console.log(`<--------${country} country: START-------->`);
      console.log(countryData);
      console.log(`<---------${country} country: END--------->`);

      const [neighbour] = countryData[0].borders;
      if (!neighbour) return;
      return httpRequest(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then((neighbourData) => {
      console.log(`<--------${country} neighbour: START-------->`);
      console.log(neighbourData);
      console.log(`<---------${country} neighbour: END--------->`);
    });
}

getCountryAndNeighbour("portugal");